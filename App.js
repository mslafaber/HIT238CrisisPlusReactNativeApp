import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmergencyDetailsScreen from './pages/EmergencyDetails';
import HomeScreen from "./pages/HomeScreen";

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
          component={EmergencyDetailsScreen}
          options={{ title: 'Emergency' }}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
