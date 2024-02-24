import * as React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Profile from './screens/Profile';
// import Tools from './screens/Tools';
// import Home from "./screens/Home";
// import Courses from './screens/Courses';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons (or any icon library you prefer)
// import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

export default function App() {
  return (<Text>hello world</Text>)

  return (

    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'Home') {
        //       iconName = focused ? 'home' : 'home';
        //     } else if (route.name === 'Courses') {
        //       iconName = focused ? 'book' : 'book';
        //     } else if (route.name === 'Tools') {
        //       iconName = focused ? 'tool' : 'hammer';
        //     } else if (route.name === 'Profile') {
        //       iconName = focused ? 'user' : 'user'
        //     }

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // })}
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

            // example badge
          }}
          name="Home" component={Home} />
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