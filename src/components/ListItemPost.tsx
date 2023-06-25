import { PostView } from 'lemmy-js-client';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MD3Theme, Text, TouchableRipple, useTheme } from 'react-native-paper';

export const ListItemPost = (props: { post: PostView }): JSX.Element => {
  const { post } = props;
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  const onItemPress = () => {
    //
  };
  return (
    <View style={styles.container}>
      <TouchableRipple onPress={onItemPress} style={styles.ripple}>
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
          </View>
          <View style={styles.content}>
            <View style={styles.titleAndComments}>
              {/* Title */}
              <Text style={styles.title}>{post.post.name}</Text>
              {/* Comment Count, url, time */}
              <View style={styles.detailsContainer}>
                <Text>{post.counts.comments} Comments</Text>
              </View>
            </View>
            {/* Thumbnail */}
            {post.post.thumbnail_url && (
              <View
                style={{
                  paddingBottom: 12,
                  // backgroundColor: 'purple',
                }}>
                <Image
                  source={{
                    uri: post.post.thumbnail_url,
                  }}
                  style={styles.thumbnail}
                />
              </View>
            )}
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
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
      // flex: 1,
      paddingVertical: 8,
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
