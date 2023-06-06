import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { IError } from '../types';

/** The props for the {@link ErrorMsg} component */
export interface IErrorMsgProps {
  /** The error object */
  error: IError;
}

/**
 * A simple component that can display an error message and code
 * @param props The {@link IError} to display
 */
export const ErrorMsg = (props: IError): JSX.Element => {
  return (
    <View>
      <Text>{props.message}</Text>
    </View>
  );
};
