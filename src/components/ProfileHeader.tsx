import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  MD3Theme,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getAccounts,
  getSettingsCurrentAccount,
} from '../features/settings/selectors';
import { useAppSelector } from '../redux/hooks';
import { LemmyUtils } from '../utils/LemmyUtils';
import { ProfileChooser } from './profile/ProfileChooser';

export const ProfileHeader = (): JSX.Element => {
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const accounts = useAppSelector(getAccounts);
  const [isClosed, setIsClosed] = useState(true);
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  const chevronIcon = isClosed ? 'menu-down' : 'menu-up';

  const contentHeight = useMemo<number>(() => {
    return accounts.size * 54 + 54;
  }, [accounts]);

  const contentHeightShared = useSharedValue(contentHeight);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(contentHeightShared.value),
    };
  });

  const lemmyInstance = useMemo(() => {
    if (currentAccount) {
      const inst = LemmyUtils.createILemmyInstance(currentAccount.instance);
      return inst;
    }
  }, [currentAccount]);

  const onPress = () => {
    setIsClosed(!isClosed);
    contentHeightShared.value = isClosed ? contentHeight : 0;
  };

  return (
    <View style={{ backgroundColor: theme.colors.surfaceVariant }}>
      <TouchableRipple onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.avatarAndNameContainer}>
            <Avatar.Icon
              icon={() => <MaterialIcon name="account" size={25} />}
              size={30}
            />
            {currentAccount && lemmyInstance && (
              <View style={styles.nameContainer}>
                <Text style={styles.username}>
                  {currentAccount.username}@{lemmyInstance.name}
                </Text>
              </View>
            )}
          </View>
          <MaterialIcon
            name={chevronIcon}
            size={40}
            color={theme.colors.onSurface}
            style={styles.chevron}
          />
        </View>
      </TouchableRipple>
      {/* content */}
      <Animated.View style={[styles.menuContainer, animatedStyles]}>
        <ProfileChooser />
      </Animated.View>
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
