import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItemComment } from '../components/ListItemComment';
import { ListItemPost } from '../components/ListItemPost';
import { useGetCommentsQuery } from '../features/lemmy/api';
import { getLemmyComments, getLemmyJWT } from '../features/lemmy/selectors';
import { IParsedComment } from '../features/lemmy/types';
import { FeedAndPostParamList } from '../navigation/types';
import { useAppSelector } from '../redux/hooks';
import { ScreenNames } from '../types';

export const PostView = (): JSX.Element => {
  const token = useAppSelector(getLemmyJWT);
  const comments = useAppSelector(getLemmyComments);
  const focused = useIsFocused();

  // console.log('comments: ', JSON.stringify(comments));
  //   const [arg, setArg] = useState<boolean | null>(focused ? true : null);
  const route = useRoute<RouteProp<FeedAndPostParamList>>();
  const post = route.params?.post;

  const navigation =
    useNavigation<MaterialTopTabNavigationProp<FeedAndPostParamList>>();

  const styles = createStyleSheet();

  const { data, isLoading, isFetching, error } = useGetCommentsQuery({
    post_id: post?.post.id,
    auth: token,
    max_depth: 5,
  });

  const renderItem = (item: ListRenderItemInfo<IParsedComment>) => {
    const loading = isLoading || isFetching;
    const loadingView =
      item.index === 0 ? <ActivityIndicator size="large" /> : <View />;
    return loading ? (
      loadingView
    ) : (
      <ListItemComment parsedComment={item.item} />
    );
  };

  // const renderHiddenItem = (
  //   rowData: ListRenderItemInfo<null>,
  //   rowMap: RowMap<null>,
  // ) => {
  //   return <ListItemCommentActions />;
  // };

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
          <FlatList
            data={comments}
            renderItem={renderItem}
            // renderHiddenItem={renderHiddenItem}
            // leftOpenValue={-200}
            ListHeaderComponent={() => (
              <View>
                <ListItemPost post={post} onThumbnailPress={onThumbnailPress} />
              </View>
            )}
            ItemSeparatorComponent={() =>
              isLoading || isFetching ? <View /> : <Divider />
            }
            ListEmptyComponent={
              <View style={styles.noCommentsContainer}>
                <Text>There are no comments</Text>
              </View>
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    noCommentsContainer: {
      marginHorizontal: 10,
    },
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
