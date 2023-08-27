import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserCircleIcon, CameraIcon, ChevronDownIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react'; // import useState hook
import { NativeWindStyleSheet } from "nativewind";
import Home  from './screens/Home';
import Pay from './screens/Pay';
import Final from './screens/Final';
import Transaction from './screens/Transaction';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  const [inputValue, setInputValue] = useState('0'); // initialize inputValue state with value '£0'

  function handleKeyPress(key) {
    if (inputValue === '0' && key === '0') {
      // do nothing if '0' is already the first and only character
      return;
    } else if (inputValue === '0') {
      // replace '0' with the pressed key
      setInputValue(key);
    } else {
      // append the pressed key to the existing input value
      setInputValue(inputValue + key);
    }
  }
  function handleBackspace() {
    // function to handle backspace button
    setInputValue(inputValue.slice(0, -1));
  }

  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={Home}/>
  <Stack.Screen name="Pay" component={Pay}/>
  <Stack.Screen name="Final" component={Final}/>
  <Stack.Screen name="Transaction" component={Transaction}/>
</Stack.Navigator>
    </NavigationContainer>
  );
}
