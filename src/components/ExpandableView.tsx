import React, { useState } from 'react';
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
  childView: React.ReactNode;
  childContainerStyle?: StyleProp<ViewStyle>;
}
export const ExpandableView = (props: IExpandableViewProps): JSX.Element => {
  // local state
  const [contentHeight, setContentHeight] = useState(0);
  const [isClosed, setIsClosed] = useState(true);
  const { headerView: buttonView, childView, childContainerStyle } = props;

  const theme = useTheme();
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

  const onPress = () => {
    console.log(isClosed);
    setIsClosed(!isClosed);
    animHeight.value = isClosed ? 50 : 0;
  };

  return (
    <View>
      <TouchableRipple onPress={onPress} style={styles.container}>
        {buttonView}
      </TouchableRipple>
      <Animated.View
        onLayout={onLayout}
        style={[animatedStyles, styles.contentContainer, childContainerStyle]}>
        {childView}
      </Animated.View>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      padding: 10,
    },
    contentContainer: {
      overflow: 'hidden',
    },
  });
};
