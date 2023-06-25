import { PostView } from 'lemmy-js-client';
import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItemPost } from '../components/ListItemPost';
import { useGetPostsQuery } from '../features/lemmy/api';
import { getLemmyAPILoading, getLemmyJWT } from '../features/lemmy/selectors';
import {
  getSettingsFeedSortType,
  getSettingsFeedSource,
} from '../features/settings/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

/**
 * Screen for the main feed list
 * @module Screens
 */
export const FeedScreen = (): JSX.Element => {
  // const [loading, setLoading] = useState(false);
  const feedSource = useAppSelector(getSettingsFeedSource);
  const sortType = useAppSelector(getSettingsFeedSortType);
  const loading = useAppSelector(getLemmyAPILoading);
  const token = useAppSelector(getLemmyJWT);

  const dispatch = useAppDispatch();

  const { isLoading, error, isFetching, data } = useGetPostsQuery({
    sort: sortType,
  });
  const styles = createStyleSheet();
  const debugPosts: PostView[] = [
    {
      post: {
        id: 1458788,
        name: 'Android compatibility is insane!',
        url: 'https://lemmy.ml/pictrs/image/ea58b5c5-130f-4846-8f1c-3c83cb4b7421.jpeg',
        creator_id: 634966,
        community_id: 14,
        removed: false,
        locked: false,
        published: '2023-06-23T05:22:46.870347',
        deleted: false,
        nsfw: false,
        thumbnail_url:
          'https://lemmy.ml/pictrs/image/d4fcea0a-2d28-4c5d-9c2c-ce2d999a05c0.jpeg',
        ap_id: 'https://lemmy.ml/post/1458788',
        local: true,
        language_id: 0,
        featured_community: false,
        featured_local: false,
      },
      creator: {
        id: 634966,
        name: 'snixyz',
        banned: false,
        published: '2023-06-03T17:01:32.643691',
        actor_id: 'https://lemmy.ml/u/snixyz',
        local: true,
        deleted: false,
        admin: false,
        bot_account: false,
        instance_id: 394,
      },
      community: {
        id: 14,
        name: 'memes',
        title: 'Memes',
        description:
          '#### Rules:\n\n\n01. Be civil and nice.\n02. Try not to excessively repost, as a rule of thumb, wait at least 2 months to do it if you *have* to.',
        removed: false,
        published: '2019-04-25T16:54:42.997194',
        updated: '2022-01-12T13:43:29.936386',
        deleted: false,
        nsfw: false,
        actor_id: 'https://lemmy.ml/c/memes',
        local: true,
        icon: 'https://lemmy.ml/pictrs/image/CJ7moKL2SV.png',
        hidden: false,
        posting_restricted_to_mods: false,
        instance_id: 394,
      },
      creator_banned_from_community: false,
      counts: {
        id: 228610,
        post_id: 1458788,
        comments: 2,
        score: 21,
        upvotes: 28,
        downvotes: 7,
        published: '2023-06-23T05:22:46.870347',
        newest_comment_time_necro: '2023-06-23T05:38:29.649928',
        newest_comment_time: '2023-06-23T05:38:29.649928',
        featured_community: false,
        featured_local: false,
        hot_rank: 2582,
        hot_rank_active: 3142,
      },
      subscribed: 'NotSubscribed',
      saved: false,
      read: false,
      creator_blocked: false,
      unread_comments: 2,
    },
  ];

  const onPostsPress = async () => {
    try {
      //
      // const response =
    } catch (error) {
      //
    }
  };

  const renderItem = (item: ListRenderItemInfo<PostView>) => {
    return <ListItemPost post={item.item} />;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={<ActivityIndicator />}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
      {/* <View style={styles.footerContainer}>
        <Text>Footer Toolbar</Text>
      </View> */}
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    contentContainer: {},
    footerContainer: {
      height: 50,
      backgroundColor: 'purple',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    safe: {
      flex: 1,
    },
  });
};
