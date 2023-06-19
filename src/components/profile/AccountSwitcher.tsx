import React, { useMemo } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Avatar, MD3Theme, Text, useTheme } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getSettingsDefaultInstance } from '../../features/settings/selectors';
import { IAccount } from '../../features/settings/types';
import { log } from '../../logging/log';
import { useAppSelector } from '../../redux/hooks';
import { LemmyUtils } from '../../utils/LemmyUtils';

export interface IProfileLoggedInProps {
  currentAccount?: IAccount;
}
export const AccountSwitcher = (props: IProfileLoggedInProps): JSX.Element => {
  const { currentAccount } = props;
  // selectors
  const defaultInstance = useAppSelector(getSettingsDefaultInstance);
  // hooks
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  const lemmyInstance = useMemo(() => {
    const href = currentAccount ? currentAccount.instance : defaultInstance;
    const inst = LemmyUtils.createILemmyInstance(href);
    return inst;
  }, [currentAccount]);

  const name = currentAccount ? currentAccount.username : 'Guest';

  const onLayout = (event: LayoutChangeEvent) => {
    log.debug('AccountSwitcher height: ' + event.nativeEvent.layout.height);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.avatarAndNameContainer}>
        {/* Avatar */}
        <Avatar.Icon
          icon={() => <MaterialIcon name="account" size={25} />}
          size={30}
        />
        {/* Name / Instance */}
        <View style={styles.nameContainer}>
          <Text style={styles.username}>
            {name}@{lemmyInstance.name}
          </Text>
        </View>
      </View>
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
