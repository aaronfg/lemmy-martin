import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { nanoid } from '@reduxjs/toolkit';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { settingsCurrentAccountChanged } from '../../features/settings/actions';
import { getAccounts } from '../../features/settings/selectors';
import { IAccount } from '../../features/settings/types';
import { RootStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ScreenNames } from '../../types';

export const ProfileChooser = (props: {
  onItemClicked?: () => void;
}): React.ReactNode => {
  const accounts = useAppSelector(getAccounts);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { onItemClicked } = props;
  const styles = createStyleSheet();

  const onAccountPress = (account: IAccount) => {
    if (onItemClicked) onItemClicked();
    dispatch(settingsCurrentAccountChanged(account));
  };

  const onAddAccountPress = () => {
    if (onItemClicked) onItemClicked();
    navigation.navigate(ScreenNames.Login);
  };

  const getAccountListItems = useMemo(() => {
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
  }, [accounts]);

  return (
    <View>
      {getAccountListItems}
      <List.Item
        title="Add Account"
        onPress={onAddAccountPress}
        left={props => (
          <MaterialIcon name="plus" {...props} style={styles.icon} size={20} />
        )}
      />
    </View>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    accountItem: {
      marginLeft: 12,
      width: 20,
      height: 20,
      backgroundColor: 'pink',
    },
    icon: {
      marginLeft: 12,
      // backgroundColor: 'red',
    },
  });
};
