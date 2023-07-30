import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { IconButton, MD3Theme, Menu, useTheme } from 'react-native-paper';
import { getUserUIFeedCurrentPost } from '../../features/user/selectors';
import { useAppSelector } from '../../redux/hooks';

export const PostHeader = (): JSX.Element => {
  // local state
  const [showMenu, setShowMenu] = useState(false);
  // selectors
  const currentPost = useAppSelector(getUserUIFeedCurrentPost);
  // hooks
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = createStyleSheet(theme);

  const onUpVotePress = () => {
    //
  };

  const onDownVotePress = () => {
    //
  };

  const onStarPress = () => {
    //
  };

  const onWebPress = () => {
    if (currentPost && currentPost.post.url) {
      Linking.openURL(currentPost.post.url);
    }
  };

  const onMenuPress = () => {
    setShowMenu(!showMenu);
  };

  const onMenuDismiss = () => {
    setShowMenu(false);
  };

  return (
    <View>
      <View style={styles.container}>
        <IconButton icon="arrow-up-thick" onPress={onUpVotePress} />
        <IconButton icon="arrow-down-thick" onPress={onDownVotePress} />
        <IconButton icon="star-outline" onPress={onStarPress} />
        <IconButton icon="web" onPress={onWebPress} />
        <Menu
          visible={showMenu}
          style={{
            borderTopColor: '#666666',
            borderTopWidth: 1,
          }}
          onDismiss={onMenuDismiss}
          anchor={<IconButton icon="dots-vertical" onPress={onMenuPress} />}
          anchorPosition="bottom">
          {/* Community */}
          <Menu.Item
            title={currentPost?.community.name}
            leadingIcon="alpha-c-circle-outline"
          />
          {/* Creator */}
          <Menu.Item
            title={
              currentPost?.creator.display_name ?? currentPost?.creator.name
            }
            leadingIcon="account-outline"
          />

          {/* Reply */}
          <Menu.Item title="Reply" leadingIcon="reply-outline" />

          {/* Hide */}
          <Menu.Item title="Hide" leadingIcon="close-outline" />
        </Menu>
      </View>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.tertiary,
      paddingVertical: 4,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
};
