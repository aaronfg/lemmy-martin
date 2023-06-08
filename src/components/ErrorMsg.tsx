import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { IError } from '../types';

/** The props for the {@link ErrorMsg} component */
export interface IErrorMsgProps {
  /** The error object */
  error: IError;
}

/**
 * A simple component that can display an error message and code
 * @param props - The {@link IError} to display
 */
export const ErrorMsg = (props: IError): JSX.Element => {
  const styles = createStyleSheet();
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{props.message}</Text>
    </View>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#FF0000',
      padding: 14,
    },
    message: {
      color: '#FFFFFF',
    },
  });
};
