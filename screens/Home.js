import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserCircleIcon, CameraIcon, ChevronDownIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useLayoutEffect, useState } from 'react'; // import useState hook
import { NativeWindStyleSheet } from "nativewind";

 function Home() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown: false,
        }, []);
    })
    const [inputValue, setInputValue] = useState('1,000'); // initialize inputValue state with value '£0'
  
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

      <View style={styles.container}>
  
        <View style={styles.top}> 
          <Image source={{uri: 'https://media.discordapp.net/attachments/1093364202342727811/1096772877602263080/WhatsApp_Image_2023-04-15_at_13.14.02-removebg-preview.png'}}
            style={{width: 80, height: 50, marginLeft: -15}} />
  
          <UserCircleIcon size={35} color='#ffffff'/> 
        </View>
  
        <View style={styles.balance}>
          <Text style={styles.input}>{"£" + inputValue}</Text>
        
          <Pressable style={styles.button}>
            <Text style={styles.text}>GBP <ChevronDownIcon size={15} color="#ffffff"/></Text>
          </Pressable>
        </View>
  
        <StatusBar style="light" />
  
        <View style={styles.buttonRow}> 
          <View style={styles.row}>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('1')}>1</Text>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('2')}>2</Text>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('3')}>3</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('4')}>4</Text>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('5')}>5</Text>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('6')}>6</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('7')}>7</Text>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('8')}>8</Text>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('9')}>9</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.buttonTest} onPress={() => setInputValue('£0')}>AC</Text>
            <Text style={styles.buttonTest} onPress={() => handleKeyPress('0')}>0</Text>
            <Text style={styles.buttonTest} onPress={handleBackspace}>{'<'}</Text>
          </View>
        </View>
  
  
       <View style={styles.payContainer}>
    <View style={styles.payRow}>
      <Pressable style={styles.buttonPay}>
        <Text style={styles.text} onPress={() => {
        navigation.navigate('Transaction')
      }}>Request</Text>
      </Pressable>
      <Pressable style={styles.buttonPay} onPress={() => {
        navigation.navigate('Pay')
      }}>
        <Text style={styles.text}>Pay</Text>
      </Pressable>
    </View>
  </View>
  
  
  <View style={styles.containerMenu}>
    <View style={styles.imageRow}>
      <Image
        source={{
          uri:
            'https://media.discordapp.net/attachments/1107444720789102756/1108771588461043772/IMG_8928.png',
        }}
        style={{width: 100, height: 70 , marginHorizontal: -5, marginBottom: 3}}
      />
  
      <Image
        source={{
          uri:
            'https://media.discordapp.net/attachments/1107444720789102756/1132785899315417158/IMG_9409.png',
        }}
        style={{width: 77, height: 50 , marginHorizontal: 5, marginTop: 18}}
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
            'https://media.discordapp.net/attachments/1107444720789102756/1108772075381997618/IMG_8929.png',
        }}
        style={{width: 70, height: 75 , marginHorizontal: 5, marginTop: 22}}
      />
    </View>
  </View>
  
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#181818',
    },
  
    top: {
      flexDirection: 'row',
      marginTop: 50,
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
  
    balance: {
     flex: 1,
     alignItems: 'center',
     marginTop: 20,
     color: '#ffffff'
    },
  
    currency: {
      color: '#ffffff',
      fontSize: 18,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      borderRadius: 10,
      width: 70,
      textAlign: 'center' 
    },
  
    input: {
  color: 'white',
  fontSize: 70,
  fontWeight: 'bold',
  marginTop: 20
    },
  
    payContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    },
    payRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
      zIndex: 1
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 9,
      paddingHorizontal: 20,
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#3e3e40',
      marginTop: 30,
      marginHorizontal: 10,
      marginBottom: 10,
    },
    buttonPay: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#3e3e40',
      marginTop: 30,
      marginHorizontal: 10,
      marginBottom: 10,
      zIndex: 20
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      zIndex: 20
    },
  
   buttonRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    height: 100,
   },
  
   row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 70,
    paddingHorizontal: 20
  },
  
   buttonTest: {
    flex: 1,
      textAlign: 'center',
      color: 'white',
      margin: 10,
      fontSize: 22,
      fontWeight: '500',
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
  image: {
    width: 80,
    height: 50,
    marginHorizontal: 5,
  },
  
  });
  
  export default Home;