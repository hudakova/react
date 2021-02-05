import React, { useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import MapViewDirections from 'react-native-maps-directions';


export default function Map() {
  const origin = {latitude: 49.166440282228955, longitude: 20.13141653100582};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCo5wljrXiQIk7zcOO3p4fTWkwjDA3LA1k';
  //var db = openDatabase({ name: 'UserDatabase.db' });
  const coordinates = [
    {latitude: 49.166440282228955, longitude: 20.13141653100582},
    {latitude: 48.779937889116475, longitude:18.577838319747922 }
  ]

  const [location, setLocation] = useState({
    initialPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    markerPosition: {
      latitude: 0,
      longitude: 0,
    }
  });

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        initialPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0023,
          longitudeDelta: 0.0014,
        },
        markerPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  )

  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{latitude: 48.79385986909311, longitude:19.611261334108423 , latitudeDelta: 5, longitudeDelta: 5}}
      
  
    >
      <MapViewDirections
        origin={coordinates[0]}
        destination={coordinates[1]}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
      <MapView.Marker coordinate={location.markerPosition} />
      
      <MapView.Marker coordinate={{latitude: 49.166440282228955, longitude: 20.13141653100582 }} pinColor='blue'/>
      <MapView.Marker coordinate={{latitude: 48.95402405958705, longitude:19.538296557369588 }} pinColor='blue'/>
      <MapView.Marker coordinate={{latitude: 48.90886565826867, longitude:20.386387054342457 }} pinColor='blue'/>
      <MapView.Marker coordinate={{latitude: 48.572810646336826, longitude:20.583108526171202}} pinColor='blue'/>
      <MapView.Marker coordinate={{latitude: 48.14224460374956, longitude:17.10022406921325}} pinColor='orange'/>
      <MapView.Marker coordinate={{latitude: 48.99962563319813, longitude:20.767522426917278 }} pinColor='orange'/>
      <MapView.Marker coordinate={{latitude: 48.70637598167338, longitude:20.51038499807026 }} pinColor='orange'/>
      <MapView.Marker coordinate={{latitude: 48.779937889116475, longitude:18.577838319747922 }} pinColor='orange'/>
    </MapView>//,
   
    /*<MapView initialRegion={…}>
  
</MapView>*/
  
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    
  },
});
