import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ScrollView, Linking, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#cc0000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 0,
            marginBottom: 5
          },
          headerStatusBarHeight: 70
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'CrisisPlus' }}
        />
        <Stack.Screen name="Life Threatening Emergency" component={triplezeroScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Poison Emergency" component={poisonScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Unsure Medical Emergency" component={unsuremedicalScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Natural Disaster Emergency" component={naturaldisasterScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Crime Reporting Emergency" component={crimereportingScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Mental Health Emergency" component={mentalhealthScreen} options={{ title: 'CrisisPlus' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Separator = () => (
  <View style={styles.separator} />
);

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={() =>
            navigation.navigate('Life Threatening Emergency', { name: 'Life Threatening Emergency' })
          }
        >
          <Text style={styles.buttonTextStyle}>Life Threatening Emergency Contact</Text>
          <Text style={styles.buttonsubTextStyle}>Contact when a person is seriously injured and need Police, Fire or Medical emergency service or when a property is threatened</Text>
          <Image source={require("./assets/triple-zero.jpg")} style={styles.buttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={() =>
            navigation.navigate('Poison Emergency', { name: 'Poison Emergency' })
          }
        >
          <Text style={styles.buttonTextStyle}>Poison Emergency Contact</Text>
          <Text style={styles.buttonsubTextStyle}>Contact when a person has taken an overdose, made an error with medicine or been poisoned</Text>
          <Image source={require("./assets/poison.png")} style={styles.buttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={() =>
            navigation.navigate('Unsure Medical Emergency', { name: 'Unsure Medical Emergency' })
          }
        >
          <Text style={styles.buttonTextStyle}>Unsure Medical Emergency or Medical Assistance Contact</Text>
          <Text style={styles.buttonsubTextStyle}>Contact to speak to a registered nurse about a medical concern but not an emergency for an ambulance</Text>
          <Image source={require("./assets/health-direct.jpg")} style={styles.buttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={() =>
            navigation.navigate('Natural Disaster Emergency', { name: 'Natural Disaster Emergency' })
          }
        >
          <Text style={styles.buttonTextStyle}>Natural Disaster Emergency Contact</Text>
          <Text style={styles.buttonsubTextStyle}>Contact when affected by a natural disaster (flodds, bushfire..) to get assistance</Text>
          <Image source={require("./assets/floods.jpg")} style={styles.buttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={() =>
            navigation.navigate('Crime Reporting Emergency', { name: 'Crime Reporting Emergency' })
          }
        >
          <Text style={styles.buttonTextStyle}>Crime Reporting Emergency Contact</Text>
          <Text style={styles.buttonsubTextStyle}>Contact if you witness suspicious or criminal activity, recognised a person/vehicle of interest to the police or overheard suspicious conversation for criminal activities</Text>
          <Image source={require("./assets/crime-report.png")} style={styles.buttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={() =>
            navigation.navigate('Mental Health Emergency', { name: 'Mental Health Emergency' })
          }
        >
          <Text style={styles.buttonTextStyle}>Go to Mental Health Emergency Contact</Text>
          <Text style={styles.buttonsubTextStyle}>Contact when feeling overwhelmed, having difficulty coping or staying safe or to prevent a suicidal situation</Text>
          <Image source={require("./assets/mental-health.png")} style={styles.buttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
    </ScrollView>
  );
};

const triplezeroScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Police, Fire or Medical Life Threatening Emergency
        </Text>
        <Image source={require("./assets/triple-zero.jpg")} style={styles.ImageIconStyle}/>
        <TouchableOpacity
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:${000}';
            }
            else {
              phoneNumber = 'telprompt:${000}';
            }
        
            Linking.openURL(phoneNumber);}} 
        >
          <Text style={styles.buttonTextStyle}>Call 000</Text>
          <Image source={require("./assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
        >
          <Text style={styles.buttonTextStyle}>Geolocation Map</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const poisonScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Poisons Emergency
        </Text>
        <Image source={require("./assets/poison.png")} style={styles.ImageIconStyle}/>
        <TouchableOpacity
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:${131126}';
            }
            else {
              phoneNumber = 'telprompt:${131126}';
            }
        
            Linking.openURL(phoneNumber);}} 
        >
          <Text style={styles.buttonTextStyle}>Call 24/7 Poisons Contact</Text>
          <Image source={require("./assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
        >
          <Text style={styles.buttonTextStyle}>Geolocation Map</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const unsuremedicalScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Medical assistance from a Registeres Nurse
        </Text>
        <Image source={require("./assets/health-direct.jpg")} style={styles.ImageIconStyle}/>
        <TouchableOpacity
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:${1800022222}';
            }
            else {
              phoneNumber = 'telprompt:${1800022222}';
            }
        
            Linking.openURL(phoneNumber);}} 
        >
          <Text style={styles.buttonTextStyle}>Call 24/7 Medical Assistance Contact</Text>
          <Image source={require("./assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
        >
          <Text style={styles.buttonTextStyle}>Geolocation Map</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const naturaldisasterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Natural Disaster Emergency Contact
        </Text>
        <Image source={require("./assets/floods.jpg")} style={styles.ImageIconStyle}/>
        <TouchableOpacity
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:${1802266}';
            }
            else {
              phoneNumber = 'telprompt:${1802266}';
            }
        
            Linking.openURL(phoneNumber);}} 
        >
          <Text style={styles.buttonTextStyle}>Call 24/7 Natural Disaster Assistance Contact</Text>
          <Image source={require("./assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
        >
          <Text style={styles.buttonTextStyle}>Geolocation Map</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const crimereportingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Crime Reporting Emergency Contact
        </Text>
        <Image source={require("./assets/crime-report.png")} style={styles.ImageIconStyle}/>
        <TouchableOpacity
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:${1800333000}';
            }
            else {
              phoneNumber = 'telprompt:${1800333000}';
            }
        
            Linking.openURL(phoneNumber);}} 
        >
          <Text style={styles.buttonTextStyle}>Call Crime Stoppers</Text>
          <Image source={require("./assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
        >
          <Text style={styles.buttonTextStyle}>Geolocation Map</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

const mentalhealthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Mental Health Emergency Contact
        </Text>
        <Image source={require("./assets/mental-health.png")} style={styles.ImageIconStyle}/>
        <TouchableOpacity
          style={styles.buttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:${131114}';
            }
            else {
              phoneNumber = 'telprompt:${131114}';
            }
        
            Linking.openURL(phoneNumber);}} 
        >
          <Text style={styles.buttonTextStyle}>Call Mental Health Helpline</Text>
          <Image source={require("./assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={styles.buttonsection}>
        <TouchableOpacity 
          style={styles.buttonstyle}
          activeOpacity={0.4}
        >
          <Text style={styles.buttonTextStyle}>Geolocation Map</Text>
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
};

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
    marginTop: 10,
  },
  buttonstyle: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FFFA',
    borderRadius: 15,
    padding: 0,
    marginBottom: 5,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.4,
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
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    height: 150,
    width: 200,
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
