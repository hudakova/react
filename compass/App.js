import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Magnetometer } from 'expo-sensors';

export default function App() {

  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const {x, y, z} = data;
  const [subscription, setSubscription] = React.useState(null);

  const toggle = () => {
    if (subscription)
      unsubscribe();
    else
      subscribe();
  };

  const subscribe = () => {
    setSubscription(
      Magnetometer.addListener(result => {
        setData(result);
      })
    );
  };
  Magnetometer.setUpdateInterval(300);

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  React.useEffect(() => {
    toggle();
    return () => {
      unsubscribe();
    };
  }, []);


  var degtorad = Math.PI / 180; // Degree-to-Radian conversion

  function compassHeading( x, y, z ) {

    var _x = y  ? y  * degtorad : 0; // beta value
    var _y = z ? z * degtorad : 0; // gamma value
    var _z = x ? x * degtorad : 0; // alpha value

    var cX = Math.cos( _x );
    var cY = Math.cos( _y );
    var cZ = Math.cos( _z );
    var sX = Math.sin( _x );
    var sY = Math.sin( _y );
    var sZ = Math.sin( _z );

    // Calculate Vx and Vy components
    var Vx = - cZ * sY - sZ * sX * cY;
    var Vy = - sZ * sY + cZ * sX * cY;

    // Calculate compass heading
    var compassHeading = Math.atan( Vx / Vy );

    // Convert compass heading to use whole unit circle
    if( Vy < 0 ) {
      compassHeading += Math.PI;
    } else if( Vx < 0 ) {
      compassHeading += 2 * Math.PI;
    }

    return compassHeading * ( 180 / Math.PI ); // Compass Heading (in degrees)
  }
  var angle = compassHeading(x, y, z)
  

  return (
    <View style={styles.behind}>
      <View style={styles.compass_bar}>
        <Text style={{fontSize: 25, fontStyle: "normal", color: 'white'}}>Compass</Text>
      </View>
      <View style={{flex: 2, marginTop: 120}}>
        <Image
          style={{ width: 320, height: 320, transform: [{ rotate: angle + "deg"}] }}
          source={require("./assets/compass.png")}
        />
      </View>
      <View style={{flex: 0.55}}>
        <Text style={styles.num_bar}> {Math.round(angle)} </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
 
}

const styles = StyleSheet.create({

  compass_bar: { 
    flex: 0.55,
    backgroundColor: '#349897',
    width: '100%',
    alignItems:"flex-start",
    justifyContent: "space-around",
    paddingLeft: 20
  },

  behind: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
  },

  num_bar: {
    flex: 1,
    marginTop: 20,
    fontSize: 42,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4
  },

});


