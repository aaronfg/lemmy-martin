import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, useTheme } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getSettingsCurrentAccount } from '../../features/settings/selectors';
import { useAppSelector } from '../../redux/hooks';
import { LemmyUtils } from '../../utils/LemmyUtils';

export const ProfileHeaderLoggedIn = (): JSX.Element => {
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const theme = useTheme();
  const styles = createStyleSheet();

  const lemmyInstance = useMemo(() => {
    if (currentAccount) {
      const inst = LemmyUtils.createILemmyInstance(currentAccount.instance);
      return inst;
    }
  }, [currentAccount]);

  //   const chevronIcon = isClosed ? 'menu-down' : 'menu-up';

  return (
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
      {/* <MaterialIcon
        name={chevronIcon}
        size={40}
        color={theme.colors.onSurface}
        style={styles.chevron}
      /> */}
    </View>
  );
};

const createStyleSheet = () => {
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
