import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/home';
import List from './pages/newList';
import ListItem from './pages/list';
import Settings from './pages/settings'


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: `#003545`,
          },
          headerTintColor: `#efefef`,
          headerTitleStyle: {

          }
        }}>
        
        <Stack.Screen name="MY TAGS" component={Home} />
        <Stack.Screen name="New List" component={List} />
        <Stack.Screen name="List" component={ListItem} />
        <Stack.Screen name="Settings" component={Settings} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
