import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItemCommunity } from '../components/ListItemCommunity';
import { communityApi } from '../features/communities/api';
import { getCommunityListItems } from '../features/communities/selectors';
import { ICommunityListItem } from '../features/communities/types';
import {
  getLemmyAPIError,
  getLemmyAPILoading,
  getLemmyJWT,
} from '../features/lemmy/selectors';
import { getSettingsFeedSource } from '../features/settings/selectors';
import { log } from '../logging/log';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

/**
 * Screen for the a list of Communities either local or across all federated instances.
 * @module Screens
 */
export const CommunitiesScreen = (): JSX.Element => {
  // const [loading, setLoading] = useState(false);
  const feedSource = useAppSelector(getSettingsFeedSource);
  const loading = useAppSelector(getLemmyAPILoading);
  const token = useAppSelector(getLemmyJWT);
  const error = useAppSelector(getLemmyAPIError);
  const communities = useAppSelector(getCommunityListItems);

  const dispatch = useAppDispatch();

  useEffect(() => {
    log.debug('ddid it');
    if (communities.length === 0)
      dispatch(communityApi.endpoints.getCommunities.initiate());
  }, []);

  const onPostsPress = async () => {
    try {
      //
      // const response =
    } catch (error) {
      //
    }
  };

  const renderItem = (item: ListRenderItemInfo<ICommunityListItem>) => {
    return <ListItemCommunity item={item.item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={communities}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeAreaView>
  );
};
