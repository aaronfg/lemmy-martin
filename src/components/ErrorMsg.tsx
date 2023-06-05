import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { IError } from '../types';

export interface IErrorMsgProps {
  error: IError;
}

export const ErrorMsg = (props: IError): JSX.Element => {
  return (
    <View>
      <Text>{props.message}</Text>
    </View>
  );
};
