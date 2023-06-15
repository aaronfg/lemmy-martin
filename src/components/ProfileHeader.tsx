import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, MD3Theme, Text, useTheme } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getSettingsCurrentAccount } from '../features/settings/selectors';
import { useAppSelector } from '../redux/hooks';
import { ScreenMargin } from '../types';
import { LemmyUtils } from '../utils/LemmyUtils';

export const ProfileHeader = (): JSX.Element => {
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const [isClosed, setIsClosed] = useState(true);
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  const lemmyInstance = useMemo(() => {
    if (currentAccount) {
      const inst = LemmyUtils.createILemmyInstance(currentAccount.instance);
      return inst;
    }
  }, [currentAccount]);
  return (
    <View style={styles.container}>
      <Avatar.Icon
        icon={() => <MaterialIcon name="account" size={45} />}
        size={50}
      />
      {currentAccount && lemmyInstance && (
        <View style={styles.nameContainer}>
          <Text style={styles.username}>
            {currentAccount.username}@{lemmyInstance.name}
          </Text>
        </View>
      )}
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surfaceVariant,
      padding: ScreenMargin.Horizontal,
      flexDirection: 'row',
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
