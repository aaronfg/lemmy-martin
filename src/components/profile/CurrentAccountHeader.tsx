import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getSettingsDefaultInstance } from '../../features/settings/selectors';
import { IAccount } from '../../features/settings/types';
import { useAppSelector } from '../../redux/hooks';
import { LemmyUtils } from '../../utils/LemmyUtils';

/**
 * Props for the {@link CurrentAccountHeader} component
 */
export interface ICurrentAccountHeaderProps {
  /** The currently logged in account */
  currentAccount?: IAccount;
}

/**
 * Header View for the {@link components/profile/AccountSwitcher#}
 * component
 * @param props - The props for this component.
 */
export const CurrentAccountHeader = (
  props: ICurrentAccountHeaderProps,
): JSX.Element => {
  const { currentAccount } = props;
  // selectors
  const defaultInstance = useAppSelector(getSettingsDefaultInstance);
  // hooks
  const styles = createStyleSheet();
  const lemmyInstance = useMemo(() => {
    const href = currentAccount ? currentAccount.instance : defaultInstance;
    const inst = LemmyUtils.createILemmyInstance(href);
    return inst;
  }, [currentAccount]);

  const name = currentAccount ? currentAccount.username : 'Guest';

  return (
    <View style={styles.container}>
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
