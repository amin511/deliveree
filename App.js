import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, TouchableNativeFeedback, SafeAreaView } from 'react-native';

// fonts :
import * as Font from 'expo-font'

import Home from './screens/Home';
import About from './screens/about';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen

          name='RestaurantScreen' component={RestaurantScreen}
          options={{
            presentation: 'modal',
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )

}

