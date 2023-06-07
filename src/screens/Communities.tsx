import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItemCommunity } from '../components/ListItemCommunity';
import { communityApi } from '../features/communities/api';
import { getCommunityListItems } from '../features/communities/selectors';
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

  return (
    <SafeAreaView>
      <View>
        {communities &&
          communities.map(com => <ListItemCommunity item={com} />)}
      </View>
    </SafeAreaView>
  );
};
