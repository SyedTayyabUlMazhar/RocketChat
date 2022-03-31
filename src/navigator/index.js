import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import
{
  Chat,
  Home,
  Login
} from '@containers';
import { NavigationService } from '@utils';

const Stack = createStackNavigator();

const MainNavigator = () => {

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
