import { useFocusEffect } from '@react-navigation/native';
import { Login } from 'lemmy-js-client';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorMsg } from '../components/ErrorMsg';
import { lemmyClearError, lemmyLogin } from '../features/lemmy/actions';
import {
  getLemmyAPIError,
  getLemmyAPILoading,
  getLemmyJWT,
} from '../features/lemmy/selectors';
import { useOrientation } from '../hooks';
import { log } from '../logging/log';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ScreenMargin } from '../types';

/**
 * The Login screen for adding an account to the app.
 */
export const LoginScreen = (): JSX.Element => {
  const loading = useAppSelector(getLemmyAPILoading);
  const token = useAppSelector(getLemmyJWT);
  const error = useAppSelector(getLemmyAPIError);

  const orientation = useOrientation();
  log.debug(`isLandscape: ${orientation.isLandscape}`);

  const styles = createStyleSheet();

  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(lemmyClearError());
  });

  const doLogin = async () => {
    const loginForm: Login = {
      username_or_email: 'subtex108@protonmail.com',
      password: '6$)9C3a$VTd+Q%V^',
    };
    try {
      const response = await dispatch(
        lemmyLogin({
          instanceUrl: 'https://lemmy.ml',
          loginForm,
        }),
      );
      log.debug('response: ', response);
    } catch (error) {
      log.error(error);
    }
  };

  const onPostsPress = async () => {
    try {
      //
      // const response =
    } catch (error) {
      //
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.title}>Login</Text>
          {/* Username */}
          <TextInput
            label="Username or Email"
            mode="outlined"
            style={styles.txtInput}
          />
          {/* Passwords */}
          <TextInput label="Password" mode="outlined" style={styles.txtInput} />
          {/* Instance */}
          <TextInput
            label="Instance Url"
            mode="outlined"
            style={styles.txtInput}
          />
          {/* Login Button */}
          <Button
            mode="contained"
            onPress={doLogin}
            disabled={loading}
            style={styles.loginBtn}>
            Login
          </Button>
          {token && <Text>JWT Token: {token}</Text>}
          {token && (
            <Button mode="contained" onPress={onPostsPress} disabled={loading}>
              Get Communities
            </Button>
          )}
          {error && <ErrorMsg message={error.message} />}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      // padding: 12,
    },
    loginBtn: {
      marginTop: 18,
      width: '50%',
      alignSelf: 'center',
    },
    scrollContent: {
      padding: ScreenMargin.Horizontal,
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
