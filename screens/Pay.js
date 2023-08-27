import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserCircleIcon, CameraIcon, ChevronDownIcon, ChevronLeftIcon, XMarkIcon, InformationCircleIcon } from "react-native-heroicons/outline";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useLayoutEffect, useState } from 'react'; // import useState hook
import { NativeWindStyleSheet } from "nativewind";
import Svg, { Path } from 'react-native-svg';

function Pay() {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);
  
    const [text, onChangeText] = useState('');
    const [note, onChangeNote] = useState('');
  
    return (
      <View style={css.container}>
        <View style={css.header}>
          <XMarkIcon size={30} style={css.xMark} color='#ffffff' strokeWidth={2} />
          <View style={css.headerContentContainer}>
            <Text style={css.headerContentAmount}>£1,000</Text>
            <Text style={css.headerContentRecipient}>Barclays Bank</Text>
          </View>
          <Pressable style={css.payButton}  onPress={() => {
        navigation.navigate('Final')
      }}>
            <Text style={css.headerContent}>Pay</Text>
          </Pressable>
        </View>
        {/* white underline */}
        <View style={css.underline} />
        {/* input field */}
        <View style={css.inputContainer}>
            <Text style={css.label}>To</Text>
          <TextInput
            style={css.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Name, £Cashtag, Phone, Email"
            placeholderTextColor="gray"
            selectionColor="green"
          />
        </View>
        <View style={css.underline2} />
        <View style={css.inputContainer}>
            <Text style={css.label}>For</Text>
          <TextInput
            style={css.input}
            onChangeText={onChangeNote}
            value={note}
            placeholder="Add a note"
            placeholderTextColor="gray"
            selectionColor="green"
          />
        </View>

        <View style={css.suggestContainer}>
          <Text style={css.suggest}>SUGGESTED</Text>
        </View>

        <View style={css.userContainer}>
             <Image
             style={css.userLogo}
        source={{
          uri: 'https://cash-images-f.squarecdn.com/apps/imgs/N2gJtjJHDdT7PisFZym7wD.jpeg?width=128',
        }}
      />

 <View style={css.userSpace}>
      <Text style={css.userText}>Vader</Text>
      <Text style={css.userTag}>$Vadernotnormal</Text>
      <Image style={css.iLogo} source={require('../assets/i-logo2.png')} />
      </View>
        </View>



        <View style={css.userContainer}>
             <Image
             style={css.userLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Eo_circle_pink_white_letter-k.svg/1024px-Eo_circle_pink_white_letter-k.svg.png?20200417165436',
        }}
      />

 <View style={css.userSpace}>
      <Text style={css.userText}>Kameron Heaven</Text>
      <Text style={css.userTag}>$kammyburn</Text>
      <Image style={css.iLogo} source={require('../assets/i-logo2.png')} />
      </View>
        </View>





        <View style={css.userContainer}>
             <Image
             style={css.userLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eo_circle_red_white_letter-a.svg/1024px-Eo_circle_red_white_letter-a.svg.png',
        }}
      />

 <View style={css.userSpace}>
      <Text style={css.userText}>Aragon Di Piazza</Text>
      <Text style={css.userTag}>$Aragon11agd</Text>
      <Image style={css.iLogo} source={require('../assets/i-logo2.png')} />
      </View>
        </View>


        <View style={css.userContainer}>
             <Image
             style={css.userLogo}
        source={{
          uri: 'https://cash-images-f.squarecdn.com/apps/imgs/xN7hq3HVRtjoK0HE7yirrE.jpeg?width=128',
        }}
      />

 <View style={css.userSpace}>
      <Text style={css.userText}>Chloe Naughton</Text>
      <Text style={css.userTag}>$lizathyroxine</Text>
      <Image style={css.iLogo} source={require('../assets/i-logo2.png')} />
      </View>
        </View>



        <View style={css.userContainer}>
             <Image
             style={css.userLogo}
        source={{
          uri: 'https://cash-images-f.squarecdn.com/apps/imgs/6GAf79Vx9jYyTFVh0xzlLH.jpeg?width=64',
        }}
      />

 <View style={css.userSpace}>
      <Text style={css.userText}>Roger Taft</Text>
      <Text style={css.userTag}>$lion197616</Text>
      <Image style={css.iLogo} source={require('../assets/i-logo2.png')} />
      </View>
        </View>




        <View style={css.userContainer}>
             <Image
             style={css.userLogo}
        source={{
          uri: 'https://cash-images-f.squarecdn.com/apps/imgs/ET592kiNrdqymZIekHiHkG.jpeg?width=128',
        }}
      />

 <View style={css.userSpace}>
      <Text style={css.userText}>Shayla Barrera</Text>
      <Text style={css.userTag}>$Shay11a</Text>
      <Image style={css.iLogo} source={require('../assets/i-logo2.png')} />
      </View>
        </View>




        <View style={css.userContainer}>
             <Image
             style={css.userLogo}
        source={{
          uri: 'https://cash-images-f.squarecdn.com/apps/imgs/gg94GGL4IZasG0gYT8j2qB.jpeg?width=128',
        }}
      />

 <View style={css.userSpace}>
      <Text style={css.userText}>Paul Bertier</Text>
      <Text style={css.userTag}>$PaulBertier</Text>
      <Image style={css.iLogo} source={require('../assets/i-logo2.png')} />
      </View>
        </View>




      </View>
    );
  }
  
  const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#181818',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10
    },
    headerContentContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: 15
    },
    headerContentAmount: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft: 20,
      fontSize: 18
    },
    headerContentRecipient: {
      color: 'darkgray',
      marginLeft: 20
    },
    headerContent: {
      color: 'white',
      fontWeight: 'bold',
      marginRight: 2,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      opacity: 0.8,
    },
    xMark: {
      marginTop: 50,
      marginLeft: 10
    },
    payButton: {
      paddingVertical: 6,
      paddingHorizontal: 17,
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#3e3e40',
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 48,
      backgroundColor: 'limegreen'
    },
    underline: {
      height: 0.5,
      backgroundColor: 'dimgray',
      position: 'absolute',
      opacity: 0.3,
      left: 0,
      right: 0,
      top: 110,
    },
    underline2: {
        height: 0.5,
        backgroundColor: 'dimgray',
        position: 'absolute',
        opacity: 0.3,
        left: 0,
        right: 0,
        top: 180,
      },
    inputContainer: {
      marginTop: 18,
      marginHorizontal: 20,
      borderBottomColor: 'white',
      flexDirection: 'row'
    },
    input: {
      height: 40,
      color: 'white',
      fontSize: 16,
      marginTop: 10
    },
    label:{
        color: 'white',
        marginTop: 21,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
   suggest:{
    color: 'darkgray',
    fontWeight: 'bold',
    fontSize: 13,
    opacity: 0.9,
   },
   suggestContainer: {
    marginTop: 18,
    marginHorizontal: 20,
    borderBottomColor: 'white',
    flexDirection: 'row',
    backgroundColor: '#232426',
    width: 5000,
    height: 35,
    paddingTop: 10,
    paddingLeft: 20,
    left: -22
  },

  userContainer: {
     marginTop: 10,
    marginHorizontal: 20,
    borderBottomColor: 'white',
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 0,
    left: 1,
  },

  userText: {
      color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 5,
    marginLeft: 2
  },

    userTag: {
      color: 'darkgray',
    fontSize: 16,
    opacity: 0.6,
    marginLeft: 2
  },

  userLogo: {
    height: 41,
    width: 41,
    marginRight: 13,
    marginTop: 0,
    borderRadius: 100
  },

  userSpace: {
    marginBottom: 5
  },

  informationIcon: {
    color: '#232426',
    backgroundColor: 'darkgray',
    fontWeight: 'bold'

  },

  iLogo: {
    left: 260,
    bottom: 35,
    height: 19,
    width: 19
  }

  });
  
  export default Pay;