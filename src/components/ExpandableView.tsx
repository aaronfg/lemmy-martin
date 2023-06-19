import React, { useImperativeHandle, useState } from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { MD3Theme, TouchableRipple, useTheme } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIconNames } from '../types';

export interface IExpandableViewProps {
  headerView: JSX.Element;
  contentView: JSX.Element;
  onStateChange?: (collapsed: boolean) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export type ExpandableViewType = {
  /** `true` if the view `contentView` is collapsed */
  collapsed: boolean;
  /** Uncollapses the view, showing the `contentView` */
  open: () => void;
  /** Collapses the view, hiding the `contentView` */
  close: () => void;
};

export const ExpandableView = React.forwardRef<
  ExpandableViewType,
  IExpandableViewProps
>((props: IExpandableViewProps, ref): JSX.Element => {
  // local state
  const [contentHeight, setContentHeight] = useState(50);
  const [isClosed, setIsClosed] = useState(true);
  const { headerView, contentView, contentContainerStyle, onStateChange } =
    props;

  const theme = useTheme();

  useImperativeHandle(ref, () => ({
    collapsed: isClosed,
    open,
    close,
  }));

  const animHeight = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(animHeight.value),
    };
  });

  const styles = createStyleSheet(theme);

  const onLayout = (event: LayoutChangeEvent) => {
    setContentHeight(event.nativeEvent.layout.height);
    // animHeight.value = event.nativeEvent.layout.height;
  };

  const close = () => {
    setIsClosed(true);
    animHeight.value = 0;
  };

  const open = () => {
    setIsClosed(false);
    animHeight.value = contentHeight;
  };

  const onPress = () => {
    setIsClosed(!isClosed);
    animHeight.value = isClosed ? contentHeight : 0;
    if (onStateChange) {
      onStateChange(!isClosed);
    }
  };

  const chevronIcon = isClosed
    ? MaterialIconNames.MenuDown
    : MaterialIconNames.MenuUp;

  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.mainContainer}>
        <TouchableRipple onPress={onPress} style={styles.container}>
          {headerView}
        </TouchableRipple>
        {!isClosed && (
          <Animated.View
            onLayout={onLayout}
            style={[
              animatedStyles,
              styles.contentContainer,
              contentContainerStyle,
            ]}>
            {contentView}
          </Animated.View>
        )}
      </View>
      {/* Chevron */}
      <MaterialIcon
        name={chevronIcon}
        color={theme.colors.onSurface}
        size={25}
        style={styles.chevron}
      />
      {/* Debug */}
      <View
        pointerEvents="none"
        style={styles.hidden}
        onLayout={event => {
          console.log(
            '++ hidden content height: ' + event.nativeEvent.layout.height,
          );
          setContentHeight(event.nativeEvent.layout.height);
        }}>
        {contentView}
      </View>
    </View>
  );
});

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contentContainer: {
      overflow: 'hidden',
    },
    hidden: {
      opacity: 0,
      position: 'absolute',
    },
    mainContainer: {
      flex: 1,
    },
    chevron: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
  });
};
