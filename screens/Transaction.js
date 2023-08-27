import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserCircleIcon, CameraIcon, ChevronDownIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useLayoutEffect, useState } from 'react'; // import useState hook
import { NativeWindStyleSheet } from "nativewind";

 function Transaction() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown: false,
        }, []);
    })
  
  
    return (

      <View style={styling.container}>



<ChevronLeftIcon style={styling.backIcon} strokeWidth={2} size={30} color="#ffffff"/>
<Text style={styling.speechless}>...</Text>




<Image
         style={styling.profile}
        source={{
          uri: 'https://cash-images-f.squarecdn.com/apps/imgs/ET592kiNrdqymZIekHiHkG.jpeg?width=128',
        }}
      />

<Text>asd</Text>





<View style={styling.containerMenu}>
    <View style={styling.imageRow}>
      <Image
        source={{
          uri:
            'https://media.discordapp.net/attachments/1107444720789102756/1108771588461043772/IMG_8928.png',
        }}
        style={{width: 100, height: 70 , marginHorizontal: 5}}
      />
  
      <Image
        source={{
          uri:
            'https://media.discordapp.net/attachments/1107444720789102756/1108818795608424469/IMG_9043.png',
        }}
        style={{width: 92, height: 68 , marginHorizontal: 5, marginTop: 40, right: 15}}
      />
  
      <Image
        source={{
          uri:
            'https://media.discordapp.net/attachments/1107444720789102756/1108771588230361118/IMG_8927.png',
        }}
        style={{width: 80, height: 80 , marginHorizontal: 5, marginTop: 15}}
      />
  
      <Image
        source={{
          uri:
            'https://media.discordapp.net/attachments/1107444720789102756/1108770299069071400/IMG_9044.png',
        }}
        style={{width: 65, height: 67 , marginHorizontal: 5, marginTop: 32}}
      />
    </View>
  </View>  
      </View>

    );
  }
  
  const styling = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
      },

      containerMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -80
      },
      imageRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

      backIcon: {
top: 70,
left: 15
      },

      speechless: {
        top: 19,
        color: 'white',
        left: 330,
        fontWeight: 'bold',
        fontSize: 35
      },

      profile: {
        height: 70,
        width: 70,
        marginRight: 13,
        marginTop: 0,
        borderRadius: 100,
        left: 152,
        top: 30
      }
  
  });

  export default Transaction;