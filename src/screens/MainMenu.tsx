import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Checkbox,
  Divider,
  Menu,
  ProgressBar,
  SegmentedButtons,
  Switch,
  Text,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LemmyDarkTheme } from '../theme';

/** Screen for the main menu */
export const MainMenuScreen = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [segValue, setSegValue] = useState('');

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Main Menu</Text>
          <Button
            mode="contained"
            onPress={() => {
              //
            }}>
            This is a button
          </Button>
          <Checkbox.Item label="This is checked" status="checked" />
          <Checkbox.Item label="This is unchecked" status="unchecked" />
          <View style={{ width: 50, marginBottom: 20 }}>
            <Menu
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={
                <Button mode="contained" onPress={openMenu}>
                  M
                </Button>
              }>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
          <ProgressBar indeterminate={true} />
          <SegmentedButtons
            style={{ marginVertical: 20 }}
            value={segValue}
            onValueChange={setSegValue}
            buttons={[
              {
                value: 'All',
                label: 'All',
                checkedColor: LemmyDarkTheme.colors.primary,
              },
              {
                value: 'Local',
                label: 'Local',
                checkedColor: LemmyDarkTheme.colors.primary,
              },
            ]}
          />
          <Switch value={true} />
          <Switch value={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
