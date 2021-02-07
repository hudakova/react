import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { useTranslation } from 'react-i18next';
import "../components/i18n"
import { ResourceStore } from 'i18next';

export default function Login({navigation}){
    const { t, i18n } = useTranslation();

    const pressHandler = () => {
        navigation.navigate('Choose');
    }
    
    return(
        <View style={styles.container0}>

            <TouchableOpacity onPress={() => i18n.changeLanguage('en')}>
                <Text style={styles.eng} >EN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => i18n.changeLanguage('sk')}>
                <Text style={styles.svk} >SK</Text>
            </TouchableOpacity>

            <View style={styles.container}>

                <Image
                    source={require('../assets/logo1.png')}
                    style={styles.logo}>
                </Image>
                <TouchableOpacity onPress={() => navigation.navigate('Choose')}>
                    <Text style={styles.butto} onPress={pressHandler}>{t('Welcome')}</Text>
                </TouchableOpacity>  

            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container0:{
        flex: 1,
        backgroundColor: '#3A3F49',
    },
    container:{
        flex:1,
        marginTop: 100,
        //justifyContent: 'center',
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
        
      },
      svk:{
        color:"#fff",
        backgroundColor:"#FFC48E",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 15,
        marginLeft: 300,
        marginRight: 21,
      },
      eng:{
        color:"#fff",
        backgroundColor:"#FFC48E",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 40,
        marginLeft: 300,
        marginRight: 21,
      }
});

