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

export interface IExpandableViewProps {
  headerView: React.ReactNode;
  contentView: React.ReactNode;
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
  const [contentHeight, setContentHeight] = useState(0);
  const [isClosed, setIsClosed] = useState(true);
  const {
    headerView,
    contentView: childView,
    contentContainerStyle,
    onStateChange,
  } = props;

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
    console.log(
      'event.nativeEvent.layout.height: ' + event.nativeEvent.layout.height,
    );
    // animHeight.value = event.nativeEvent.layout.height;
  };

  const close = () => {
    setIsClosed(true);
    animHeight.value = 0;
  };

  const open = () => {
    setIsClosed(false);
    animHeight.value = 50;
  };

  const onPress = () => {
    console.log(isClosed);
    setIsClosed(!isClosed);
    animHeight.value = isClosed ? 50 : 0;
    if (onStateChange) {
      onStateChange(!isClosed);
    }
  };

  return (
    <View>
      <TouchableRipple onPress={onPress} style={styles.container}>
        {headerView}
      </TouchableRipple>
      <Animated.View
        onLayout={onLayout}
        style={[
          animatedStyles,
          styles.contentContainer,
          contentContainerStyle,
        ]}>
        {childView}
      </Animated.View>
    </View>
  );
});

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      // padding: 10,
    },
    contentContainer: {
      overflow: 'hidden',
    },
  });
};
