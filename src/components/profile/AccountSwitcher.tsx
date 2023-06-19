import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';
import { getSettingsCurrentAccount } from '../../features/settings/selectors';
import { useAppSelector } from '../../redux/hooks';
import { ExpandableView, ExpandableViewType } from '../ExpandableView';
import { CurrentAccountHeader } from './CurrentAccountHeader';
import { ProfileChooser } from './ProfileChooser';

export const AccountSwitcher = (): JSX.Element => {
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  const exp = useRef<ExpandableViewType>(null);

  const onAccountItemClick = () => {
    exp.current?.close();
  };

  return (
    <View style={styles.container}>
      <ExpandableView
        ref={exp}
        headerView={<CurrentAccountHeader currentAccount={currentAccount} />}
        contentView={<ProfileChooser onItemClicked={onAccountItemClick} />}
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
