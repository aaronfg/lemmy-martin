import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { log } from '../logging/log';
import { FeedAndPostParamList } from '../navigation/types';

export const PostView = (): JSX.Element => {
  const route = useRoute<RouteProp<FeedAndPostParamList>>();
  const post = route.params?.post;
  log.debug('route params: ', route.params);
  return (
    <SafeAreaView>
      <StatusBar />
      {!post && <Text>Post View here</Text>}
      {post && <Text>{post.post.name}</Text>}
    </SafeAreaView>
  );
};
