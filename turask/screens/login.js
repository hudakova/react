import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { useTranslation } from 'react-i18next';
import "../components/i18n"

export default function Login({navigation}){
    const { t, i18n } = useTranslation();

    const pressHandler = () => {
        navigation.navigate('Choose');
    }
    
    return(
        
        <View style={styles.container}>
             <Image
                source={require('../assets/logo1.png')}
                style={styles.logo}>
            </Image>
            <TouchableOpacity onPress={() => navigation.navigate('Choose')}>
                <Text style={styles.butto} onPress={pressHandler}>{t('Welcome')}</Text>
            </TouchableOpacity>  
            
            
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A3F49',
    },
    butto: {
        marginTop: 70,
        paddingVertical: 8,
        paddingHorizontal: 70,
        borderWidth: 4,
        borderColor: "#FFC48E",
        borderRadius: 10,
        backgroundColor: "#FFC48E",
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

