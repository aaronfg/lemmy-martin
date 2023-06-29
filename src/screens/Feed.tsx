import { nanoid } from '@reduxjs/toolkit';
import { PostView } from 'lemmy-js-client';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  Linking,
  ListRenderItemInfo,
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
import { ListItemPost } from '../components/ListItemPost';
import { useGetPostsQuery } from '../features/lemmy/api';
import { settingsFeedPageUpdated } from '../features/settings/actions';
import {
  getSettingsCurrentAccountToken,
  getSettingsFeedPage,
  getSettingsFeedSortType,
  getSettingsFeedType,
} from '../features/settings/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

/**
 * Screen for the main feed list
 * @module Screens
 */
export const FeedScreen = (): JSX.Element => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [previewImgLoaded, setPreviewImgLoaded] = useState(false);
  // const [page, setPage] = useState(1);
  const sortType = useAppSelector(getSettingsFeedSortType);
  const feedType = useAppSelector(getSettingsFeedType);
  const page = useAppSelector(getSettingsFeedPage);
  const authToken = useAppSelector(getSettingsCurrentAccountToken);

  const dispatch = useAppDispatch();
  const dimensions = useWindowDimensions();
  const theme = useTheme();

  console.log('FEED sort: ' + sortType + '\tpage: ' + page);
  const { isLoading, error, isFetching, data } = useGetPostsQuery({
    sort: sortType,
    page,
    type_: feedType,
    auth: authToken,
  });
  const styles = createStyleSheet();

  const onListEndReached = (info: { distanceFromEnd: number }) => {
    dispatch(settingsFeedPageUpdated(page + 1));
  };

  const onPostsPress = async () => {
    try {
      //
      // const response =
    } catch (error) {
      //
    }
  };

  const onThumbnailPress = (url: string) => {
    setPreviewUrl(url);
  };

  const onPreviewDismiss = () => {
    setPreviewUrl(undefined);
    setPreviewImgLoaded(false);
  };

  const renderItem = useCallback((item: ListRenderItemInfo<PostView>) => {
    return (
      <ListItemPost
        key={nanoid()}
        post={item.item}
        onThumbnailPress={onThumbnailPress}
      />
    );
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={theme.colors.tertiary} />
      <View style={styles.contentContainer}>
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
            ListEmptyComponent={<Text>No items to show!</Text>}
            ListFooterComponent={
              <View style={styles.pageButtonsContainer}>
                <Button
                  mode="outlined"
                  icon="arrow-left"
                  disabled={page === 1}
                  onPress={() =>
                    dispatch(settingsFeedPageUpdated(page > 1 ? page - 1 : 1))
                  }>
                  Prev
                </Button>
                <Button
                  mode="outlined"
                  icon="arrow-right"
                  onPress={() => dispatch(settingsFeedPageUpdated(page + 1))}>
                  Next
                </Button>
              </View>
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
            {/* <ScrollView maximumZoomScale={3} minimumZoomScale={1}> */}
            <TouchableOpacity onPressIn={onPreviewDismiss}>
              <Image
                source={{ uri: previewUrl }}
                style={{
                  width: dimensions.width,
                  height: dimensions.height - 100,
                }}
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
                icon="web"
                style={styles.openInBrowser}
                onPress={() => {
                  Linking.openURL(previewUrl);
                }}>
                Open in Browser
              </Button>
            </TouchableOpacity>
            {/* </ScrollView> */}
          </Modal>
        </Portal>
      )}
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
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
    footerContainer: {
      height: 50,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
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
