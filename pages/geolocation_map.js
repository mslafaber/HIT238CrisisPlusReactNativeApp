import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export class GeoMap extends React.Component {
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
  
    render() {
      return (
          <View style={styles.mapsection}>
          <Text style={styles.mappin}>Touch the Red Pin on the map to View the Address</Text>
                <MapView
                style={styles.mapview}
                region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                onRegionChange={this._handleMapRegionChange}
                >
                <MapView.Marker
                style={styles.mapviewmarker}
                coordinate={this.state.location.coords}
                title="My Location"
                description={this.state.locationResult}
                />
                </MapView>
          </View>
      );
    }
  };

  const styles = StyleSheet.create({
    mapsection: {
      marginTop: 10,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 0,
      marginBottom: 5,
      height: 460
    },
    mapview: {
      alignSelf: 'stretch',
      height: 420
    },
    mappin: {
      color: "#DC143C",
      fontSize: 16,
      textAlign: 'center'
    }
  });
  