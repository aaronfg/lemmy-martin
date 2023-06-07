import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login';
import { ScreenNames } from '../types';

/** The Stack Navigator for the Login */
const Stack = createNativeStackNavigator();

export const LoginStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};
