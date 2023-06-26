import { nanoid } from '@reduxjs/toolkit';
import { PostView } from 'lemmy-js-client';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  Linking,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { ActivityIndicator, Button, Modal, Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItemPost } from '../components/ListItemPost';
import { useGetPostsQuery } from '../features/lemmy/api';
import { getSettingsFeedSortType } from '../features/settings/selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

/**
 * Screen for the main feed list
 * @module Screens
 */
export const FeedScreen = (): JSX.Element => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const sortType = useAppSelector(getSettingsFeedSortType);

  const dispatch = useAppDispatch();
  const dimensions = useWindowDimensions();

  const { isLoading, error, isFetching, data } = useGetPostsQuery({
    sort: sortType,
    page,
  });
  const styles = createStyleSheet();

  const onListEndReached = (info: { distanceFromEnd: number }) => {
    setPage(page + 1);
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
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={<ActivityIndicator />}
          onEndReached={onListEndReached}
          onEndReachedThreshold={0.8}
          // ItemSeparatorComponent={() => (
          //   <Divider style={{ backgroundColor: 'red' }} />
          // )}
        />
      </View>
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
                  // backgroundColor: 'gray',
                  width: dimensions.width,
                  height: dimensions.height - 100,
                }}
                resizeMode="contain"
              />
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
    contentContainer: {},
    footerContainer: {
      height: 50,
      backgroundColor: 'purple',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    modal: {
      backgroundColor: '#000000',
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
