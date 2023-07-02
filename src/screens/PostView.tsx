import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItemPost } from '../components/ListItemPost';
import { log } from '../logging/log';
import { FeedAndPostParamList } from '../navigation/types';

export const PostView = (): JSX.Element => {
  const route = useRoute<RouteProp<FeedAndPostParamList>>();
  const post = route.params?.post;
  log.debug('route params: ', route.params);

  const onThumbnailPress = (url: string) => {
    //
  };

  return (
    <SafeAreaView>
      <StatusBar />
      {!post && <Text>Post View here</Text>}
      {post && (
        <View>
          <ListItemPost post={post} onThumbnailPress={onThumbnailPress} />
        </View>
      )}
    </SafeAreaView>
  );
};
