import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';

import { ProfileHeader } from './ProfileHeader';

import {
  getAccounts,
  getSettingsCurrentAccount,
} from '../../features/settings/selectors';
import { useAppSelector } from '../../redux/hooks';
import { ExpandableView } from '../ExpandableView';
import { ProfileChooser } from './ProfileChooser';

export const ProfileHeader_old = (): JSX.Element => {
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const accounts = useAppSelector(getAccounts);
  const [isClosed, setIsClosed] = useState(true);
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  const chevronIcon = isClosed ? 'menu-down' : 'menu-up';

  // const contentHeight = useMemo<number>(() => {
  //   return accounts.size * 54 + 54;
  // }, [accounts]);

  // const contentHeightShared = useSharedValue(0);

  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     height: withTiming(contentHeightShared.value),
  //   };
  // });

  // const lemmyInstance = useMemo(() => {
  //   if (currentAccount) {
  //     const inst = LemmyUtils.createILemmyInstance(currentAccount.instance);
  //     return inst;
  //   }
  // }, [currentAccount]);

  // const onPress = () => {
  //   setIsClosed(!isClosed);
  //   contentHeightShared.value = isClosed ? contentHeight : 0;
  // };

  // const onProfileItemPress = () => {
  //   setIsClosed(true);
  //   contentHeightShared.value = 0;
  // };

  return (
    <View style={{ backgroundColor: theme.colors.surfaceVariant }}>
      <>
        <ExpandableView
          headerView={<ProfileHeader />}
          contentView={
            <ProfileChooser
              onItemClicked={() => {
                //
              }}
            />
          }
        />
        {/* <TouchableRipple onPress={onPress}> */}

        {/* </TouchableRipple> */}
        {/* content */}
        {/* <Animated.View style={[styles.menuContainer, animatedStyles]}>
          <ProfileChooser onItemClicked={onProfileItemPress} />
        </Animated.View> */}
      </>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    avatarAndNameContainer: {
      flexDirection: 'row',
    },
    container: {
      padding: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      flexShrink: 1,
    },
    chevron: {
      //
    },
    menuContainer: {
      backgroundColor: 'black',
      overflow: 'hidden',
    },
    nameContainer: {
      paddingLeft: 12,
      justifyContent: 'center',
    },
    username: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
};
