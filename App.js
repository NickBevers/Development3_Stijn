// IMPORT DEPENDENCIES
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// IMPORTING SCREENS
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import WalletScreen from './screens/WalletScreen';

// DECLARE VARIABLES
let splash = 'splash'
let home = 'Home';
let detail = 'Detail';
let wallet = 'Wallet';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeScreenTab(){
  return(
      <Tab.Navigator
      initialRouteName={home}
      screenOptions={({route})=>({
          tabBarIcon:({focused, color, size}) => {
              let iconName;
              let routeName = route.name;

              if(routeName == home){
                  iconName = focused ? 'home' : 'home-outline'
              }
              else if (routeName == wallet){
                  iconName = focused ? 'wallet' : 'wallet-outline'
              }

              return <Ionicons name={iconName} size={size} color={color}/>
          }
      })}>
          
      <Tab.Screen name={home} component={HomeScreen}/>
      <Tab.Screen name={wallet} component={WalletScreen}/>
  </Tab.Navigator>
  )
}

function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={splash} component={SplashScreen}/>
          <Stack.Screen name={'HomeTab'} component={HomeScreenTab} options={{ headerShown: false }}/>
          <Stack.Screen name={detail} component={DetailScreen} />
          <Stack.Screen name={wallet} component={DetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;