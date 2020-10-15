// Use native specific file extensions for fix map module loading
// https://docs.expo.io/versions/latest/react-native/platform-specific-code/#native-specific-extensions-ie-sharing-code-with-nodejs
// This should be fixed in the base library soon
// https://github.com/expo/react-native-maps/pull/2
import React from 'react';
import MapView from 'react-native-web-maps';
const {Marker} = MapView;


export default MapView;
export {
	MapView,
	Marker
};
