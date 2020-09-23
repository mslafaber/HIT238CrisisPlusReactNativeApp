import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
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
          <Text style={styles.buttonTextStyle}>Go to Life Threatening Emergency Contact</Text>
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
          <Text style={styles.buttonTextStyle}>Go to Poison Emergency Contact</Text>
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
          <Text style={styles.buttonTextStyle}>Go to Unsure Medical Emergency Contact</Text>
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
          <Text style={styles.buttonTextStyle}>Go to Natural Disaster Emergency Contact</Text>
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
          <Text style={styles.buttonTextStyle}>Go to Crime Reporting Emergency Contact</Text>
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
          <Image source={require("./assets/mental-health.png")} style={styles.buttonImageIconStyle}/>
        </TouchableOpacity>
      </View>
      <Separator />
    </ScrollView>
  );
};

const triplezeroScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        Life Threatening Emeregency
      </Text>
      <Text>This is Life Threatening Emeregency Contact screen</Text>
    </View>
  );
};

const poisonScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        Poison Emergency
      </Text>
      <Text>This is Poison Emergency Contact screen</Text>
    </View>
  );
};

const unsuremedicalScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        Unsure Medical Emergency
      </Text>
      <Text>This is Unsure Medical Emergency Contact screen</Text>
    </View>
  );
};

const naturaldisasterScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        Natural Disaster Emergency
      </Text>
      <Text>This is Natural Disaster Emergency Contact screen</Text>
    </View>
  );
};

const crimereportingScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        Crime Reporting Emergency
      </Text>
      <Text>This is Crime Reporting Emergency Contact screen</Text>
    </View>
  );
};

const mentalhealthScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        Mental Health Emergency
      </Text>
      <Text>This is Mental Health Emergency Contact screen</Text>
    </View>
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
  buttonTextStyle: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 4,
    marginLeft: 10,
    fontWeight: "bold"
  }
});
