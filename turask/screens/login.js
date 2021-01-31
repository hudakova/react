import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default function Login({navigation}){

    const pressHandler = () => {
        navigation.navigate('Choose');
    }
    
    return(
        
        <View style={styles.container}>
             <Image
                source={require('../assets/horykruh.png')}
                style={styles.logo}>
            </Image>
            <TouchableOpacity onPress={() => navigation.navigate('Choose')}>
                <Text style={styles.butto} onPress={pressHandler}>Welcome</Text>
            </TouchableOpacity>  
            
            
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        padding: 40,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    butto: {
        marginTop: 70,
        paddingVertical: 8,
        paddingHorizontal: 70,
        borderWidth: 4,
        borderColor: "#499567",
        borderRadius: 10,
        backgroundColor: "#499567",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      logo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 113,
        width: 120
        
      }
});

