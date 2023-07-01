import Color from 'color';
import { PostView } from 'lemmy-js-client';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import { DateUtils } from '../utils/DateUtils';
import { LemmyUtils } from '../utils/LemmyUtils';

export const ListItemPost = (props: {
  post: PostView;
  onPress: (post: PostView) => void;
  onThumbnailPress: (url: string) => void;
}): JSX.Element => {
  const { post, onPress, onThumbnailPress } = props;
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  const onItemPress = () => {
    //
    onPress(post);
  };

  const onThumbPress = async () => {
    if (post.post.thumbnail_url) {
      onThumbnailPress(post.post.thumbnail_url);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onItemPress} style={styles.ripple}>
        <View
          style={
            {
              // flexWrap: 'wrap',
            }
          }>
          {/* Votes, Creator, and Community */}
          <View style={styles.votesContainer}>
            {/* Votes */}
            <Text style={styles.votesTxt}>{post.counts.score}</Text>
            {/* Creator */}
            <Text style={styles.creatorTxt}>{post.creator.name}</Text>
            <Text> in </Text>
            <Text style={styles.creatorTxt}>
              {LemmyUtils.getPostCommunityForItem(post.community)}
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.titleAndComments}>
              {/* Title */}
              <Text style={styles.title}>{post.post.name}</Text>
              {/* Details */}
              <View style={styles.detailsContainer}>
                {/* Comments */}
                <Text style={styles.comments}>
                  {post.counts.comments} Comments
                </Text>

                {/* url */}
                {post.post.url && (
                  <Text style={styles.comments}>
                    {' \u2022 '}
                    {LemmyUtils.getPostUrlShort(post.post.url)}
                  </Text>
                )}
                {/* Time */}
                <Text style={styles.comments}>
                  {' \u2022 '}
                  {DateUtils.getUserFriendlyPostDate(post.post.published)}
                </Text>
              </View>
            </View>
            {/* Thumbnail */}
            {post.post.thumbnail_url && (
              <TouchableOpacity
                style={styles.thumbnailContainer}
                onPress={onThumbPress}>
                <Image
                  source={{
                    uri: post.post.thumbnail_url,
                  }}
                  style={styles.thumbnail}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    comments: {
      color: Color(theme.colors.onSurface).darken(0.3).hex(),
      paddingBottom: 4,
    },
    container: {
      // backgroundColor: theme.colors.background,
      paddingTop: 8,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'center',
      // backgroundColor: 'blue',
    },
    creatorTxt: {
      color: theme.colors.primary,
    },
    detailsContainer: {
      flexDirection: 'row',
      paddingVertical: 8,
      flexWrap: 'wrap',
      paddingRight: 12,
    },
    ripple: {
      // paddingVertical: 8,
      paddingHorizontal: 12,
      flexGrow: 1,
    },
    thumbnail: {
      width: 80,
      height: 80,
      backgroundColor: '#333333',
      borderRadius: 20,
    },
    thumbnailContainer: {
      marginBottom: 12,
      // borderWidth: 1,
      // borderColor: '#333333',
      borderRadius: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      // paddingBottom: 8,
      paddingTop: 4,
      flexWrap: 'wrap',
      width: '90%',
      // backgroundColor: 'maroon',
    },
    titleAndComments: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      // backgroundColor: 'maroon',
    },
    votesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    votesTxt: {
      fontSize: 22,
      color: '#CCCCCC',
      marginRight: 8,
    },
  });
};
