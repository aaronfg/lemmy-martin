import { useFocusEffect } from '@react-navigation/native';
import { Login } from 'lemmy-js-client';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ActivityIndicator, Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorMsg } from '../components/ErrorMsg';
import { lemmyClearError, lemmyLogin } from '../features/lemmy/actions';
import {
  getLemmyAPILoading,
  getLemmyLoginError,
} from '../features/lemmy/selectors';
import {
  getSettingsCurrentAccountToken,
  getSettingsDefaultInstance,
} from '../features/settings/selectors';
import { useOrientation } from '../hooks';
import { log } from '../logging/log';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ScreenMargin } from '../types';

/**
 * The Login screen for adding an account to the app.
 */
export const LoginScreen = (): JSX.Element => {
  // selectors
  const defaultInstance = useAppSelector(getSettingsDefaultInstance);
  const loading = useAppSelector(getLemmyAPILoading);
  const token = useAppSelector(getSettingsCurrentAccountToken);
  const error = useAppSelector(getLemmyLoginError);
  // local state
  const [username, setUsername] = useState<string | undefined>('subtex');
  const [pw, setPW] = useState<string | undefined>(undefined);
  const [instance, setInstance] = useState<string | undefined>(defaultInstance);

  const orientation = useOrientation();

  const styles = createStyleSheet(orientation.isLandscape);

  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(lemmyClearError());
  });

  const onUserChanged = (text: string) => {
    setUsername(text.trim());
  };

  const onPWChanged = (text: string) => {
    setPW(text.trim());
  };

  const onInstanceChanged = (text: string) => {
    const textTrimmed = text.trim();
    const finalText = textTrimmed.endsWith('/')
      ? textTrimmed.substring(0, textTrimmed.length - 1)
      : textTrimmed;
    setInstance(finalText);
  };

  const doLogin = async () => {
    if (username && pw && instance) {
      const loginForm: Login = {
        username_or_email: username,
        password: pw,
      };
      try {
        const response = await dispatch(
          lemmyLogin({
            instanceUrl: instance,
            loginForm,
          }),
        );
        log.debug('response: ', response);
      } catch (error) {
        log.error(error);
      }
    }
  };

  const formIsValid = !!username && !!pw && !!instance;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="always">
        {/* <View style={styles.content}> */}
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.title}>Login</Text>
          {/* Username */}
          <TextInput
            label="Username or Email"
            mode="outlined"
            style={styles.txtInput}
            onChangeText={onUserChanged}
          />
          {/* Passwords */}
          <TextInput
            label="Password"
            mode="outlined"
            style={styles.txtInput}
            secureTextEntry={true}
            onChangeText={onPWChanged}
            blurOnSubmit={true}
          />
          {/* Instance */}
          <TextInput
            label="Instance Url"
            mode="outlined"
            placeholder={instance}
            style={styles.txtInput}
            onChangeText={onInstanceChanged}
          />

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={doLogin}
            disabled={loading || !formIsValid}
            style={styles.loginBtn}>
            Login
          </Button>

          {error && (
            <ErrorMsg
              error={{ message: error.message }}
              containerStyle={styles.errorContainer}
            />
          )}
          {loading && <ActivityIndicator />}
        </KeyboardAvoidingView>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyleSheet = (isLandscape: boolean) => {
  return StyleSheet.create({
    chipContainer: {
      // marginHorizontal: ScreenMargin.Horizontal,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 8,
    },
    container: {
      minWidth: isLandscape ? '60%' : '100%',
      flex: 1,
    },
    content: {
      // flex: 1,
      width: '100%',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
    errorContainer: {
      marginVertical: 20,
    },
    loginBtn: {
      marginTop: 18,
      width: '50%',
      alignSelf: 'center',
    },
    safe: {
      flex: 1,
    },
    scrollContent: {
      padding: ScreenMargin.Horizontal,
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
    },
    txtInput: {
      margin: 8,
    },
  });
};
