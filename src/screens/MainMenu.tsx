import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

/** Screen for the main menu */
export const MainMenuScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const styles = createStyleSheet();

  const onAddAccountPress = () => {
    // navigation.navigate(ScreenNames.Login);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <List.Item
            title="Add Account"
            onPress={onAddAccountPress}
            left={props => (
              <MaterialIcon
                name="plus"
                {...props}
                style={styles.icon}
                size={20}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      paddingTop: 20,
    },
    icon: {
      padding: 2,
      // backgroundColor: 'red',
    },
  });
};
