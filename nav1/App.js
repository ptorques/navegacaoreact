import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A from './src/screens/TelaA.js';
import B from './src/screens/TelaB.js';
import C from './src/screens/TelaC.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="A" screenOptions={{
          headerShown: true,
        }}>
          <Stack.Screen name="A" component={A} options={{ title: 'A' }} />
          <Stack.Screen name="B" component={B} options={{ title: 'B' }} />
          <Stack.Screen name="C" component={C} options={{ title: 'C' }} />
        </Stack.Navigator>
      </NavigationContainer >
  );
}

export default App;