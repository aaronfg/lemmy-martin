import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login';
import { ScreenNames } from '../types';

const Stack = createNativeStackNavigator();

/** The Stack Navigator for the Login */
export const LoginStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};
