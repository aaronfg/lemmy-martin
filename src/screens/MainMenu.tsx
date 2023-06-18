import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExpandableView } from '../components/ExpandableView';
import { ProfileChooser } from '../components/profile/ProfileChooser';
import { RootStackParamList } from '../navigation/types';

/** Screen for the main menu */
export const MainMenuScreen = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = createStyleSheet();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ExpandableView
            buttonView={<Text>Press ME</Text>}
            childView={
              <ProfileChooser
                onItemClicked={() => {
                  //
                }}
              />
            }
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
