import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './screens/Notifications'
import HomeScreen from './screens/Home'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notificationszzz" options={{backgroundColor:"red"}}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
            headerStyle:{backgroundColor:"pink"},
            /*headerRight:() => {
              return <Text>In The Header</Text>
            }*/
            headerRight:() => {
              return <Button title="Tap ME"/>
            }
        }}
      />
      <Stack.Screen 
          options={{
            headerStyle:{backgroundColor:"pink"},
            /*headerRight:() => {
              return <Text>In The Header</Text>
            }*/
            headerRight:() => {
              return <Button title="Tap ME"/>
            }
          }} 
        name="Notificationszzz" 
        component={NotificationsScreen} 
        
        />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}