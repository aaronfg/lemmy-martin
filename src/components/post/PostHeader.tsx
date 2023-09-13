import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Linking, Platform, StyleSheet, View } from 'react-native';
import { IconButton, MD3Theme, Menu, useTheme } from 'react-native-paper';
import { getUserUIFeedCurrentPost } from '../../features/user/selectors';
import { useAppSelector } from '../../redux/hooks';
import { MaterialIconNames } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Header component for a Post with actionable icons for
 * voting, starring, etc.
 */
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

  const onMenuCommunityPress = useCallback(() => {
    //
  }, []);

  const onMenuCreatorPress = useCallback(() => {
    //
  }, []);

  const onMenuReplyPress = useCallback(() => {
    //
  }, []);

  const onMenuHidePress = useCallback(() => {
    //
  }, []);

  const onMenuSharePress = useCallback(() => {
    //
  }, []);

  const onMenuCopyPress = useCallback(() => {
    //
  }, []);

  const onMenuReloadCommentsPress = useCallback(() => {
    //
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* UpVote */}
        <IconButton
          icon={MaterialIconNames.ArrowUpThick}
          onPress={onUpVotePress}
        />
        {/* DownVote */}
        <IconButton
          icon={MaterialIconNames.ArrowDownThick}
          onPress={onDownVotePress}
        />
        {/* Star */}
        <IconButton
          icon={MaterialIconNames.StarOutline}
          onPress={onStarPress}
        />
        {/* Web */}
        <IconButton icon={MaterialIconNames.Web} onPress={onWebPress} />
        {/* Menu */}
        {currentPost && (
          <View>
            <Menu
              visible={showMenu}
              style={styles.menu}
              onDismiss={onMenuDismiss}
              anchor={
                <IconButton
                  icon={MaterialIconNames.DotsVertical}
                  onPress={onMenuPress}
                />
              }
              anchorPosition="bottom">
              {/* Community */}
              <Menu.Item
                title={currentPost?.community.name}
                leadingIcon={MaterialIconNames.AlphaCCircleOutline}
                onPress={onMenuCommunityPress}
              />
              {/* Creator */}
              <Menu.Item
                title={
                  currentPost?.creator.display_name ?? currentPost?.creator.name
                }
                leadingIcon={MaterialIconNames.AccountOutline}
                onPress={onMenuCreatorPress}
              />

              {/* Reply */}
              <Menu.Item
                title="Reply"
                leadingIcon={MaterialIconNames.ReplyOutline}
                onPress={onMenuReplyPress}
              />

              {/* Hide */}
              <Menu.Item
                title="Hide"
                leadingIcon={MaterialIconNames.CloseOutline}
                onPress={onMenuHidePress}
              />
              {/* Share */}
              <Menu.Item
                title="Share"
                leadingIcon={
                  Platform.OS === 'android'
                    ? MaterialIconNames.ShareVariantOutline
                    : MaterialIconNames.ExportVariant
                }
                onPress={onMenuSharePress}
              />
              {/* Copy */}
              <Menu.Item
                title="Copy"
                leadingIcon={MaterialIconNames.ContentCopy}
                onPress={onMenuCopyPress}
              />
              {/* Reload Comments */}
              <Menu.Item
                title="Reload Comments"
                leadingIcon={MaterialIconNames.Reload}
                onPress={onMenuReloadCommentsPress}
              />
            </Menu>
          </View>
        )}
      </View>
    </SafeAreaView>
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
    menu: {
      borderTopColor: '#666666',
      borderTopWidth: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
};
