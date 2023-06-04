import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './screens/Notifications'


import HomeScreen from './screens/Home'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MyDrawer = () => {
  return (
    <View style={{backgroundColor:"pink",  flex:1}}>
    
      <Drawer.Navigator 
      //useLegacyImplementation={true}
      initialRouteName="Notificationszzz" options={{backgroundColor:"red"}}>
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          drawerLabel: 'HomePPPPPP',
            headerStyle:{backgroundColor:"pink"},
            /*headerRight:() => {
              return <Text>In The Header</Text>
            }*/
            headerRight:() => {
              return <Button title="Tap ME"/>
            }
        }}
      />
      <Drawer.Screen 
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
  
      </Drawer.Navigator>

    </View>
  );
}

const AppStack = createNativeStackNavigator();

export default  MyStack = () => {
  return(
    <NavigationContainer>
    <AppStack.Navigator initialRouteName="Drawer">
      <AppStack.Screen name="Drawer" component={MyDrawer}/>
      <AppStack.Screen name="Home" component={HomeScreen}/>
    </AppStack.Navigator>
    </NavigationContainer>
  );
}