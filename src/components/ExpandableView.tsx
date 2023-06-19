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

/** Props for the {@link ExpandableView} component */
export interface IExpandableViewProps {
  /** The view that users click on */
  headerView: JSX.Element;
  /** The view that is shown/hidden by the collapsing/opening */
  contentView: JSX.Element;
  /** Event handler when the collapsed state of the component changes*/
  onStateChange?: (collapsed: boolean) => void;
  /** Optional style for the container view of the `contentView` */
  contentContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * Type for the {@link ExpandableView} events/props.
 *
 * Used for type safety when using a React ref
 */
export type ExpandableViewType = {
  /** `true` if the view `contentView` is collapsed */
  collapsed: boolean;
  /** Uncollapses the view, showing the `contentView` */
  open: () => void;
  /** Collapses the view, hiding the `contentView` */
  close: () => void;
};

/**
 * Simple accordian style expanding view that shows a clickable
 * view that reveals another view when clicked.
 * @param props - An {@link IExpandableViewProps} instance
 */
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
      {/* Hidden view for size determination */}
      <View
        pointerEvents="none"
        style={styles.hidden}
        onLayout={event => {
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
