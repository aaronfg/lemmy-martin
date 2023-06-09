import { useFocusEffect } from '@react-navigation/native';
import { Login } from 'lemmy-js-client';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
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
import { getSettingsDefaultInstance } from '../features/settings/selectors';
import { useOrientation } from '../hooks';
import { log } from '../logging/log';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ScreenMargin } from '../types';

/**
 * The Login screen for adding an account to the app.
 */
export const LoginScreen = (): JSX.Element => {
  const defaultInstance = useAppSelector(getSettingsDefaultInstance);
  const loading = useAppSelector(getLemmyAPILoading);
  const token = useAppSelector(getLemmyJWT);
  const error = useAppSelector(getLemmyAPIError);

  const [username, setUsername] = useState<string | undefined>(undefined);
  const [pw, setPW] = useState<string | undefined>(undefined);
  const [instance, setInstance] = useState<string | undefined>(defaultInstance);

  const orientation = useOrientation();
  log.debug(`isLandscape: ${orientation.isLandscape}`);

  const styles = createStyleSheet(orientation.isLandscape);

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

  const onChipPress = (url: string) => {
    setInstance(url);
  };

  const formIsValid = !!username && !!pw && !!instance;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
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
            <TextInput
              label="Password"
              mode="outlined"
              style={styles.txtInput}
              secureTextEntry={true}
            />
            {/* Instance */}
            <TextInput
              label="Instance Url"
              mode="outlined"
              placeholder={instance}
              style={styles.txtInput}
            />

            {/* Login Button */}
            <Button
              mode="contained"
              onPress={doLogin}
              disabled={loading || !formIsValid}
              style={styles.loginBtn}>
              Login
            </Button>

            {error && <ErrorMsg message={error.message} />}
          </KeyboardAvoidingView>
        </View>
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
    },
    content: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
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
