import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { nanoid } from '@reduxjs/toolkit';
import { PostView } from 'lemmy-js-client';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  Linking,
  ListRenderItemInfo,
  ScaledSize,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Modal,
  Portal,
  Text,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorMsg } from '../components/ErrorMsg';
import { ListItemPost } from '../components/ListItemPost';
import { useGetPostsQuery } from '../features/lemmy/api';
import { settingsFeedPageUpdated } from '../features/settings/actions';
import { getSettingsCurrentAccountToken } from '../features/settings/selectors';
import {
  userUIFeedCurrentPostUpdated,
  userUIFeedPageUpdated,
} from '../features/user/actions';
import {
  getUserUIFeedPage,
  getUserUIFeedSortType,
  getUserUIFeedType,
} from '../features/user/selectors';
import { log } from '../logging/log';
import { FeedAndPostParamList } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { MaterialIconNames, ScreenNames } from '../types';

/**
 * Screen for the main feed list
 * @module Screens
 */
export const FeedScreen = (): JSX.Element => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [previewImgLoaded, setPreviewImgLoaded] = useState(false);
  // const [page, setPage] = useState(1);
  const sortType = useAppSelector(getUserUIFeedSortType);
  const feedType = useAppSelector(getUserUIFeedType);
  const page = useAppSelector(getUserUIFeedPage);
  const authToken = useAppSelector(getSettingsCurrentAccountToken);

  const dispatch = useAppDispatch();
  const dimensions = useWindowDimensions();
  const theme = useTheme();
  const navigation =
    useNavigation<MaterialTopTabNavigationProp<FeedAndPostParamList>>();

  // console.log('FEED sort: ' + sortType + '\tpage: ' + page);
  const { isLoading, error, isFetching, data, refetch } = useGetPostsQuery({
    sort: sortType,
    page,
    type_: feedType,
    auth: authToken,
  });
  const styles = createStyleSheet(dimensions);

  const onListEndReached = (info: { distanceFromEnd: number }) => {
    dispatch(settingsFeedPageUpdated(page + 1));
  };

  const onThumbnailPress = (url: string) => {
    setPreviewUrl(url);
  };

  const onPreviewDismiss = () => {
    setPreviewUrl(undefined);
    setPreviewImgLoaded(false);
  };

  const onListItemPress = (post: PostView) => {
    //
    log.debug('pressed ' + post.post.name);
    dispatch(userUIFeedCurrentPostUpdated(post));
    log.debug('after dispatch');
    navigation.jumpTo(ScreenNames.PostView, { post });
  };

  const renderItem = useCallback((item: ListRenderItemInfo<PostView>) => {
    return (
      <ListItemPost
        key={nanoid()}
        post={item.item}
        onThumbnailPress={onThumbnailPress}
        onPress={onListItemPress}
      />
    );
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={theme.colors.tertiary} />
      <View style={styles.contentContainer}>
        {/* Error */}
        {error && !isFetching && (
          <View style={styles.errorContainer}>
            <ErrorMsg
              error={{
                message:
                  'name' in error && error.name === 'AbortError'
                    ? 'Failed to load posts. Please try again.'
                    : JSON.stringify(error),
              }}
            />
          </View>
        )}
        {/* Feed loading indicator */}
        {isLoading || isFetching ? (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
            <ActivityIndicator style={styles.loadingIndicator} />
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                {!error && !isFetching && <Text>No items to show!</Text>}
              </View>
            }
            ListFooterComponent={
              !error && !isFetching ? (
                <View style={styles.pageButtonsContainer}>
                  <Button
                    icon={MaterialIconNames.ArrowLeft}
                    disabled={page === 1}
                    onPress={() =>
                      dispatch(userUIFeedPageUpdated(page > 1 ? page - 1 : 1))
                    }>
                    Prev Page
                  </Button>
                  <Button
                    icon={MaterialIconNames.ArrowRight}
                    onPress={() => dispatch(userUIFeedPageUpdated(page + 1))}>
                    Next Page
                  </Button>
                </View>
              ) : (
                <View />
              )
            }
            // onEndReached={onListEndReached}
            // onEndReachedThreshold={0.8}
          />
        )}
      </View>
      {/* Image preview */}
      {previewUrl && (
        <Portal>
          <Modal
            visible={!!previewUrl}
            onDismiss={onPreviewDismiss}
            style={styles.modal}>
            <TouchableOpacity onPressIn={onPreviewDismiss}>
              <Image
                source={{ uri: previewUrl }}
                style={styles.imagePreview}
                resizeMode="contain"
                onLoad={() => {
                  setPreviewImgLoaded(true);
                }}
              />
              {/* Image loading indicator */}
              {!previewImgLoaded && (
                <View style={styles.absoluteCentered}>
                  <ActivityIndicator style={styles.absoluteCentered} />
                </View>
              )}
              {/* Open in Browser button */}
              <Button
                mode="contained"
                icon={MaterialIconNames.Web}
                style={styles.openInBrowser}
                onPress={() => {
                  Linking.openURL(previewUrl);
                }}>
                Open in Browser
              </Button>
            </TouchableOpacity>
          </Modal>
        </Portal>
      )}
    </SafeAreaView>
  );
};

const createStyleSheet = (dimensions: ScaledSize) => {
  return StyleSheet.create({
    absoluteCentered: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    contentContainer: {
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
    },
    errorContainer: {
      paddingHorizontal: 12,
      marginTop: 12,
    },
    footerContainer: {
      height: 50,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    imagePreview: {
      width: dimensions.width,
      height: dimensions.height - 100,
    },
    listContentEmpty: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingIndicator: {
      marginVertical: 12,
    },
    modal: {
      backgroundColor: '#000000',
    },
    pageButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: 10,
    },
    safe: {
      flex: 1,
    },
    openInBrowser: {
      alignSelf: 'center',
      marginTop: 12,
    },
  });
};
