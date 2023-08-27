import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserCircleIcon, CameraIcon, ChevronDownIcon, ChevronLeftIcon, XCircleIcon } from "react-native-heroicons/outline";
import { useFonts } from 'expo-font';
import FastImage from 'react-native-fast-image';
import * as SplashScreen from 'expo-splash-screen';
import { useLayoutEffect, useState } from 'react'; // import useState hook
import { NativeWindStyleSheet } from "nativewind";

function Preloader() {
  return (
    <View style={style.preloader}>
        <Image
             style={style.gif}
        source={{
          uri: 'https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif',
        }}
      />
</View>
  );
}

function Final() {
  const [isLoading, setIsLoading] = useState(true); // add state for loading
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // set loading state to false after 3 seconds
    }, 2000);
    return () => clearTimeout(timer); // clear the timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <View style={style.container}>
          <Image
            style={style.xIcon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/458/458595.png',
            }}
          />
          <View style={style.main}>
            <View style={style.textContainer}>
              <Text style={style.sent}>Funds have been sent!</Text>
              <Text style={style.security}>Due to security risk with the receiver's account we are temporarily holding the funds.</Text>
              <Text style={style.release}>To release the funds to the receiver:</Text>
              <Text style={style.notify}>1. Notify the receiver about the hold on funds.</Text>
              <Text style={style.instruct}>2. The receiver must send you a minimum of £100 in total funds to complete this transaction</Text>
              <Text style={style.funds}>3. The funds will be released instantly upon meeting the minimum transaction requirement from the receiver of £10</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  xIcon: {
    top: 52,
    left: 24,
    height: 15,
    width: 15
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 180
  },
  textContainer: {
    alignItems: 'center',
  },
  sent: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 15
  },

  security: {
    fontWeight: '500',
    fontSize: 16,
    padding: 12,
    marginBottom: 20
  },

  release: {
    left: -50,
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 9
  },

  notify: {
    left: -16,
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 9
  },

  instruct: {
    left: 4,
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 9
  },

  funds: {
    left: 7,
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 9
  },

  preloader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gif: {
    width: 25,
    height: 25,
    bottom: 30
  }
  
});

export default Final;
