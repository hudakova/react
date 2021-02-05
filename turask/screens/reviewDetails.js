import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { images } from '../styles/imStyle';

export default function ReviewDetails({navigation}){

    const rating = navigation.getParam('rating');
  
    return(
        <View style={styles.container}>
          
             <View style={styles.rating}>
              <Image style={styles.im} source={images.ratings[rating]}  />
            </View> 
            <Text style={styles.text}>{ navigation.getParam( 'title' )}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 24,
        backgroundColor: '#3A3F49'
    },
    rating: {
        width: 60,
        height: 50,
    },
    im: {
        marginTop: 100,
        width: 310,
        height: 250,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginTop: 365,
        textAlign: 'center',
    }
});