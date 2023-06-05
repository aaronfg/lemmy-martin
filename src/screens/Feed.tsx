import { Login } from 'lemmy-js-client';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorMsg } from '../components/ErrorMsg';
import { login } from '../features/lemmy/actions';
import {
  getLemmyAPIError,
  getLemmyAPILoading,
  getLemmyJWT,
} from '../features/lemmy/selectors';
import { getSettingsFeedSource } from '../features/settings/selectors';
import { log } from '../logging/log';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

/**
 * Screen for the main feed list
 * @module Screens
 */
export const FeedScreen = (): JSX.Element => {
  // const [loading, setLoading] = useState(false);
  const feedSource = useAppSelector(getSettingsFeedSource);
  const loading = useAppSelector(getLemmyAPILoading);
  const token = useAppSelector(getLemmyJWT);
  const error = useAppSelector(getLemmyAPIError);

  const dispatch = useAppDispatch();

  const doLogin = async () => {
    // setLoading(true);
    // const baseUrl = 'https://lemmy.ml';
    // const client: LemmyHttp = new LemmyHttp(baseUrl);
    const loginForm: Login = {
      username_or_email: 'subtex108@protonmail.com',
      password: '6$)9C3a$VTd+Q%V^',
    };
    try {
      // const response = await client.login(loginForm);
      const response = await dispatch(
        login({
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
      <ScrollView>
        <View>
          <Text>Feed</Text>
          <Text>Default Source: {feedSource}</Text>

          <Button mode="contained" onPress={doLogin} disabled={loading}>
            Login
          </Button>
          {token && <Text>JWT Token: {token}</Text>}
          {token && (
            <Button mode="contained" onPress={onPostsPress} disabled={loading}>
              Get Communities
            </Button>
          )}
          {error && <ErrorMsg message={error.message} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
