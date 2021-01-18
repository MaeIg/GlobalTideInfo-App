import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './App/nav/HomeScreen';
import ResultScreen from './App/nav/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: "GLOBAL TIDE INFO",
            headerStyle: {
              backgroundColor: '#0398FC'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }} 
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
          options={{ 
            title: "City Placeholder",
            headerStyle: {
              backgroundColor: '#0398FC'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
