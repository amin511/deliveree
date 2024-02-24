// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react'

// import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, TouchableNativeFeedback, SafeAreaView } from 'react-native';

// // fonts :
// import * as Font from 'expo-font'

// import Home from './screens/Home';
// import About from './screens/about';
// // navigation
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import RestaurantScreen from './screens/RestaurantScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [fontLoaded, setFontLoaded] = useState(false)

//   return (

//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Home' component={Home} />

//         <Stack.Screen

//           name='RestaurantScreen' component={RestaurantScreen}
//           options={{
//             presentation: 'modal',
//             headerShown: false
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>

//   )

// }

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import Tools from './screens/Tools';
import Home from "./screens/Home";
import Courses from './screens/Courses';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons (or any icon library you prefer)
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './components/Details';
const Tab = createBottomTabNavigator();
export const stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <stack.Navigator>
      <stack.Screen options={{
        headerShown: false
      }} name="Myhome" component={Home} />
      <stack.Screen
        options={{
          presentation: 'modal',
          headerShown: false
        }}
        name="Details" component={Details} />
    </stack.Navigator>
  );
}


export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'green', // Color for selected tab
          inactiveTintColor: 'gray', // Color for inactive tabs
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={20} />
            ),
            headerShown: false
            // example badge
          }}
          name="Home" component={HomeStack} />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="book-open" size={24} color={color} />
            ),
            // example badge
          }}

          name="Courses" component={Courses} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="tool" color={color} size={20} />
            ),
            // example badge
          }}
          name="Tools" component={Tools} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign color={color} name="user" size={24} />),
            // example badge
          }}
          name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
