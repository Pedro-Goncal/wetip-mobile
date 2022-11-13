import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TailwindProvider } from 'tailwindcss-react-native';

//Screens
import HomeScreen from './screens/HomeScreen';
import CurrencyConverterScreen from './screens/CurrencyConverterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const BottomTab = createMaterialBottomTabNavigator();

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="HOME"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa044f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 68,
  },
});


