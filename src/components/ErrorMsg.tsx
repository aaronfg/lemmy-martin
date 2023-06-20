import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { IError } from '../types';

/** The props for the {@link ErrorMsg} component */
export interface IErrorMsgProps {
  /** The error object */
  error: IError;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * A simple component that can display an error message and code
 * @param props - The {@link IError} to display
 */
export const ErrorMsg = (props: IErrorMsgProps): JSX.Element => {
  const styles = createStyleSheet();
  return (
    <View style={props.containerStyle}>
      <View style={styles.container}>
        <Text style={styles.message}>{props.error.message}</Text>
      </View>
    </View>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#FF0000',
      padding: 14,
      borderRadius: 12,
    },
    message: {
      color: '#FFFFFF',
    },
  });
};
