import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'CrisisPlus Home' }}
        />
        <Stack.Screen name="Life Threatening Emergency" component={triplezeroScreen} />
        <Stack.Screen name="Poison Emergency" component={poisonScreen} />
        <Stack.Screen name="Unsure Medical Emergency" component={unsuremedicalScreen} />
        <Stack.Screen name="Natural Disaster Emergency" component={naturaldisasterScreen} />
        <Stack.Screen name="Crime Reporting Emergency" component={crimereportingScreen} />
        <Stack.Screen name="Mental Health Emergency" component={mentalhealthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.titlebar}>
        CrisisPlus
      </Text>
      <Button
        title="Go to Life Threatening Emergency Contact"
        onPress={() =>
          navigation.navigate('Life Threatening Emergency', { name: 'Life Threatening Emergency' })
        }
      />
      <Button
        title="Go to Poison Emergency Contact"
        onPress={() =>
          navigation.navigate('Poison Emergency', { name: 'Poison Emergency' })
        }
      />
      <Button
        title="Go to Unsure Medical Emergency contact"
        onPress={() =>
          navigation.navigate('Unsure Medical Emergency', { name: 'Unsure Medical Emergency' })
        }
      />
      <Button
        title="Go to Natural Disaster Emergency Contact"
        onPress={() =>
          navigation.navigate('Natural Disaster Emergency', { name: 'Natural Disaster Emergency' })
        }
      />
      <Button
        title="Go to Crime Reporting Emergency Contact"
        onPress={() =>
          navigation.navigate('Crime Reporting Emergency', { name: 'Crime Reporting Emergency' })
        }
      />
      <Button
        title="Go to Mental Health Emergency Contact"
        onPress={() =>
          navigation.navigate('Mental Health Emergency', { name: 'Mental Health Emergency' })
        }
      />
    </View>
  );
};

const triplezeroScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        CrisisPlus
      </Text>
      <Text>This is Life Threatening Emeregency Contact screen</Text>
    </View>
  );
};

const poisonScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        CrisisPlus
      </Text>
      <Text>This is Poison Emergency Contact screen</Text>
    </View>
  );
};

const unsuremedicalScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        CrisisPlus
      </Text>
      <Text>This is Unsure Medical Emergency Contact screen</Text>
    </View>
  );
};

const naturaldisasterScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        CrisisPlus
      </Text>
      <Text>This is Natural Disaster Emergency Contact screen</Text>
    </View>
  );
};

const crimereportingScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        CrisisPlus
      </Text>
      <Text>This is Crime Reporting Emergency Contact screen</Text>
    </View>
  );
};

const mentalhealthScreen = () => {
  return (
    <View>
      <Text style={styles.titlebar}>
        CrisisPlus
      </Text>
      <Text>This is Mental Health Emergency Contact screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'flex-start',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  titlebar: {
    color: "#fff",
    backgroundColor: "#cc0000",
    fontSize: 60,
    textAlign: "center",
    padding: 22
  }
});
