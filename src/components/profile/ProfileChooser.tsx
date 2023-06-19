import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { List, MD3Theme, useTheme } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { settingsCurrentAccountChanged } from '../../features/settings/actions';
import { getAccounts } from '../../features/settings/selectors';
import { IAccount } from '../../features/settings/types';
import { RootStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ScreenNames } from '../../types';

export const ProfileChooser = (props: {
  onItemClicked?: () => void;
}): JSX.Element => {
  const accounts = useAppSelector(getAccounts);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { onItemClicked } = props;
  const styles = createStyleSheet(theme);

  const onAccountPress = (account: IAccount) => {
    if (onItemClicked) onItemClicked();
    dispatch(settingsCurrentAccountChanged(account));
  };

  const onAddAccountPress = () => {
    if (onItemClicked) onItemClicked();
    navigation.navigate(ScreenNames.Login);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    // log.debug('ProfileChooser height: ' + event.nativeEvent.layout.height);
  };

  const getAccountListItems = () => {
    const accountsArray = Array.from(accounts);
    const items: JSX.Element[] = [];
    accountsArray.map(acc => {
      const instanceUrl = new URL(acc.instance);
      const item = (
        <List.Item
          key={nanoid()}
          left={() => <View style={styles.accountItem} />}
          title={`${acc.username}@${instanceUrl.host}`}
          onPress={() => onAccountPress(acc)}
        />
      );
      items.push(item);
    });
    return items;
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {getAccountListItems()}
      <List.Item
        title={`Add Account`}
        onPress={onAddAccountPress}
        left={props => (
          <MaterialIcon name="plus" {...props} style={styles.icon} size={20} />
        )}
      />
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'black',
    },
    accountItem: {
      marginLeft: 12,
      width: 12,
      height: 12,
      backgroundColor: theme.colors.onSurface,
      borderRadius: 12,
      alignSelf: 'center',
    },
    icon: {
      marginLeft: 8,
      // backgroundColor: 'red',
    },
  });
};
