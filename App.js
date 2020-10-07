import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView, Linking, Platform, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { GeoMap } from './geolocation_map';
import { EmergencyDetails } from './EmergencyDetails';
import Icon from 'react-native-vector-icons/Ionicons';

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
          options={{ title: 'CrisisPlus' }}/>

        <Stack.Screen
          name="EmergencyDetails"
          component={EmergencyDetails}
          options={{ title: 'Contact' }}/>
        
        {/* <Stack.Screen name="Life Threatening Emergency" component={triplezeroScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Poison Emergency" component={poisonScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Unsure Medical Emergency" component={unsuremedicalScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Natural Disaster Emergency" component={naturaldisasterScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Crime Reporting Emergency" component={crimereportingScreen} options={{ title: 'CrisisPlus' }}/>
        <Stack.Screen name="Mental Health Emergency" component={mentalhealthScreen} options={{ title: 'CrisisPlus' }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
/*
const Separator = () => (
  <View style={styles.separator} />
);*/

class HomeScreen extends React.Component {
 
  construstor() {

    this.state = {
      data: [],
      value: '',
    };

    this.emergsArray = [
      { title: 'Life Threatening Emergency Contact', id: '1', description: 'Contact when a person is seriously injured and need Police, Fire or Medical emergency service or when a property is threatened', image: require("./assets/triple-zero.jpg"), screendetailTitle: 'Police, Fire or Medical Life Threatening Emergency', callTitle: 'Call 000', androidnum: 'tel:131126', iOSnum: 'telprompt:${131126}' },
      { title: 'Poison Emergency Contact', id: '2', description: 'Contact when a person has taken an overdose, made an error with medicine or been poisoned', screendetailTitle: 'Poisons Emergency', image: require("./assets/poison.png"), callTitle: 'Call 24/7 Poisons Contact', androidnum: 'tel:131126', iOSnum: 'telprompt:${131126}' },
      /*{ title: 'title 3', id: '3', description: 'description 3', screendetailTitle: 'Poisons Emergency', androidnum: 'tel:131126', iOSnum: 'telprompt:${131126}' },
      { title: 'title 4', id: '4', description: 'description 4', screendetailTitle: 'Police, Fire or Medical Life Threatening Emergency', androidnum: 'tel:131126', iOSnum: 'telprompt:${131126}' },
    */];
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchItems = text => {
    let newData = this.arrayNew.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemData.indexOf(textData) > -1;
    }
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader = () => {
    return (
      <TextInput
        style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
        placeholder="Type Name..."
        onChangeText={text => this.searchItems(text)}
      />
    );
  };

  _onPressItem = () => { 
     this.props.navigation.navigate('EmergencyDetails', item)
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsection}>
        <FlatList 
          data={this.emergsArray}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.buttonstyle}
            activeOpacity={0.4}
            onPress={() => navigation.navigate('EmergencyDetails', item)}
          >
            <Text style={styles.buttonTextStyle}>{item.title}</Text>
            <Text style={styles.buttonsubTextStyle}>{item.description}</Text>
            <Image source={item.image} style={styles.buttonImageIconStyle}/>
          </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
        </View>
      </View>
    );
  }
}
/*
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
};*/

/*
class triplezeroScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Separator />
        <View>
          <Text style={styles.individualtitlebar}>
            Police, Fire or Medical Life Threatening Emergency
          </Text>
          <TouchableOpacity
            style={styles.callbuttonstyle}
            activeOpacity={0.4}
            onPress={()=> {
              let phoneNumber = '';
    
              if (Platform.OS === 'android') {
                phoneNumber = 'tel:000';
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
        <GeoMap />
        <Separator />
      </ScrollView>
    );
  }
};

const poisonScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Poisons Emergency
        </Text>
        <TouchableOpacity
          style={styles.callbuttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:131126';
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
      <GeoMap />
      <Separator />
    </ScrollView>
  );
};

const unsuremedicalScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Medical assistance from a Registeres Nurse
        </Text>
        <TouchableOpacity
          style={styles.callbuttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:1800022222';
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
      <GeoMap />
      <Separator />
    </ScrollView>
  );
};

const naturaldisasterScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Natural Disaster Emergency Contact
        </Text>
        <TouchableOpacity
          style={styles.callbuttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:1802266';
            }
            else {
              phoneNumber = 'telprompt:${1802266}';
            }
        
            Linking.openURL(phoneNumber);}} 
        >
          <Text style={styles.buttonTextStyle}>Call 24/7 Disaster Assistance Contact</Text>
          <Image source={require("./assets/call-icon.jpg")} style={styles.callbuttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
      <GeoMap />
      <Separator />
    </ScrollView>
  );
};

const crimereportingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Crime Reporting Emergency Contact
        </Text>
        <TouchableOpacity
          style={styles.callbuttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:1800333000';
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
      <GeoMap />
      <Separator />
    </ScrollView>
  );
};

const mentalhealthScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Separator />
      <View>
        <Text style={styles.individualtitlebar}>
          Mental Health Emergency Contact
        </Text>
        <TouchableOpacity
          style={styles.callbuttonstyle}
          activeOpacity={0.4}
          onPress={()=> {
            let phoneNumber = '';
  
            if (Platform.OS === 'android') {
              phoneNumber = 'tel:131114';
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
      <GeoMap />
      <Separator />
    </ScrollView>
  );
};*/

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
