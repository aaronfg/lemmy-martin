import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItemPost } from '../components/ListItemPost';
import { log } from '../logging/log';
import { FeedAndPostParamList } from '../navigation/types';
import { ScreenNames } from '../types';

export const PostView = (): JSX.Element => {
  const route = useRoute<RouteProp<FeedAndPostParamList>>();
  const post = route.params?.post;
  log.debug('route params: ', route.params);
  const navigation =
    useNavigation<MaterialTopTabNavigationProp<FeedAndPostParamList>>();

  const styles = createStyleSheet();

  const onThumbnailPress = (url: string) => {
    //
  };

  const onGoBackPress = () => {
    navigation.jumpTo(ScreenNames.Feed);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar />
      {!post && (
        <View style={styles.noPostContainer}>
          <View style={styles.noPostContent}>
            <Text style={styles.noPost}>No post selected!</Text>
            <Button mode="contained" onPress={onGoBackPress}>
              Go Back to Feed
            </Button>
          </View>
        </View>
      )}
      {post && (
        <View style={styles.postContainer}>
          <ListItemPost post={post} onThumbnailPress={onThumbnailPress} />
          <Divider />
        </View>
      )}
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    noPost: {
      fontSize: 20,
      marginBottom: 12,
    },
    noPostContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    noPostContent: {
      alignSelf: 'center',
      alignItems: 'center',
    },
    postContainer: {
      flex: 1,
    },
    safe: {
      flex: 1,
    },
  });
};
