import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking, Platform } from 'react-native';
import { GeoMap } from './geolocation_map';

const Separator = () => (
  <View style={styles.separator} />
);

export default class EmergencyDetailsScreen extends React.Component {

  /* constructor(props){
    super(props)
    this.state = {
      emergsArray: this.props.navigation.state.params.emergsArray,
    };
  } */
  render(){
    return (
      <ScrollView style={styles.container}>
        <Separator />
          <View>
          <Text style={styles.individualtitlebar}>
            Second screen title passed from home screen goes here - Under Development
            {/* should display the second screen title{emergsArray.secondscreentitle} */}
          </Text>
          <Text style={styles.individualtitlebar}>
            Call data passed from homescreen goes here(A button with a call icon, and correct emergency contact number) - Under Development
            {/* should display the second screen title{emergsArray.secondscreentitle} */}
          </Text>
          {/* { <TouchableOpacity
            style={styles.callbuttonstyle}
            activeOpacity={0.4}
            onPress={()=> {
              let phoneNumber = '';
    
              if (Platform.OS === 'android') {
                phoneNumber = androidnum;
              }
              else {
                phoneNumber = iOSnum;
              }
          
              Linking.openURL(phoneNumber);}} 
          >
            <Text style={styles.buttonTextStyle}>{navigation.getParam('callTitle')}</Text>
            <Image source={require("../assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
          </TouchableOpacity>} */}
        </View>
        <Separator />
        <GeoMap />
        <Separator />
      </ScrollView>
    );
  }
}/*  

export class EmergencyDetails extends React.Component {
    render() {
      const { params } = this.props.navigation.state;
      const { title } = params ? params: null;
      return (
        <ScrollView style={styles.container}>
          <Separator />
          <View>
            <Text style={styles.individualtitlebar}>
              {title}
            </Text>
            { <TouchableOpacity
              style={styles.callbuttonstyle}
              activeOpacity={0.4}
              onPress={()=> {
                let phoneNumber = '';
      
                if (Platform.OS === 'android') {
                  phoneNumber = androidnum;
                }
                else {
                  phoneNumber = iOSnum;
                }
            
                Linking.openURL(phoneNumber);}} 
            >
              <Text style={styles.buttonTextStyle}>{navigation.getParam('callTitle')}</Text>
              <Image source={require("../assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
            </TouchableOpacity> }
          </View>
          <Separator />
          <GeoMap />
          <Separator />
        </ScrollView>
      );
    }
  }; */

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    titlebar: {
      fontSize: 18,
      textAlign: "center",
      padding: 22
    },
    individualtitlebar: {
      fontSize: 18,
      textAlign: "center",
      padding: 22,
      fontWeight: "bold",
    },
    ImageIconStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F5FFFA',
      shadowRadius: 10,
      shadowOpacity: 0.4,
      padding: 5,
      height: 150,
      width: 380,
      marginBottom: 5,
      resizeMode: 'stretch',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonsection: {
      marginTop: 1,
    },
    buttonstyle: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: '#F5FFFA',
      borderRadius: 15,
      padding: 0,
      marginBottom: 5,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.4,
    },
    callbuttonstyle: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F5FFFA',
      padding: 0,
      marginBottom: 5,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 3,
      shadowOpacity: 0.4,
      height: 150,
    },
    buttonImageIconStyle: {
      padding: 5,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 20,
      height: 150,
      width: 350,
      resizeMode: 'stretch',
    },
    callbuttonImageIconStyle: {
      padding: 5,
      marginTop: 1,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 20,
      height: 100,
      width: 100,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {
      fontSize: 18,
      marginTop: 15,
      marginBottom: 4,
      marginLeft: 10,
      fontWeight: "bold",
      textAlign: "center"
    },
    buttonsubTextStyle: {
      fontSize: 14,
      marginTop: 5,
      marginBottom: 4,
      marginLeft: 10,
      textAlign: "center"
    }
  });
  