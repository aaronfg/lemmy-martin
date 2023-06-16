import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { nanoid } from '@reduxjs/toolkit';
import React, { useMemo } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAccounts } from '../../features/settings/selectors';
import { RootStackParamList } from '../../navigation/types';
import { useAppSelector } from '../../redux/hooks';
import { ScreenNames } from '../../types';

export const ProfileChooser = (props: {
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}): React.ReactNode => {
  const accounts = useAppSelector(getAccounts);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const styles = createStyleSheet();

  const getAccountListItems = useMemo(() => {
    const accountsArray = Array.from(accounts);
    const items: JSX.Element[] = [];
    accountsArray.map(acc => {
      const instanceUrl = new URL(acc.instance);
      const item = (
        <List.Item
          key={nanoid()}
          title={`${acc.username}@${instanceUrl.host}`}
        />
      );
      items.push(item);
    });
    return items;
  }, [accounts]);

  const onAddAccountPress = () => {
    navigation.navigate(ScreenNames.Login);
  };

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
    icon: {
      padding: 2,
      // backgroundColor: 'red',
    },
  });
};
