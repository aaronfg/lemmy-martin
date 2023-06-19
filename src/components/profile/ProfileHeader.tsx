import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';
import { getSettingsCurrentAccount } from '../../features/settings/selectors';
import { useAppSelector } from '../../redux/hooks';
import { ExpandableView } from '../ExpandableView';
import { AccountSwitcher } from './AccountSwitcher';
import { ProfileChooser } from './ProfileChooser';

export const ProfileHeader = (): JSX.Element => {
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  return (
    <View style={styles.container}>
      <ExpandableView
        headerView={<AccountSwitcher currentAccount={currentAccount} />}
        contentView={
          <ProfileChooser
            onItemClicked={() => {
              //
            }}
          />
        }
      />
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surfaceVariant,
    },
  });
};
