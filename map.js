import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button,SafeAreaView, TouchableOpacity, Image, ScrollView, Linking, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

class triplezeroScreen extends React.Component {
    state = {
      mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
      hasLocationPermissions: false,
      locationResult: null,
      location: {coords: { latitude: 37.78825, longitude: -122.4324}}
    };
  
    componentDidMount() {
      this._getLocationAsync();
    }
  
    _handleMapRegionChange = mapRegion => {
      this.setState({ mapRegion });
    };
  
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          locationResult: 'Permission to access location was denied',
          location,
        });
      } else {
        this.setState({ hasLocationPermissions: true });
      } 
  
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location), location });
      
    };
}