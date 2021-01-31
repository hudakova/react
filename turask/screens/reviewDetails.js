import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { images } from '../styles/imStyle';

export default function ReviewDetails({navigation}){

    const rating = navigation.getParam('rating');
  
    return(
        <View style={styles.container}>
          <Text>{ navigation.getParam( 'title' )}</Text>
             <View style={styles.rating}>
              <Image style={styles.im} source={images.ratings[rating]}  />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
         padding: 24
    },
    rating: {
        width: 60,
        height: 50,
    },
    im: {
        width: 300,
        height: 200,
    }
});