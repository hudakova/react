import React from 'react';
import { StyleSheet, View, Text,  TouchableOpacity} from 'react-native';
import { useTranslation } from 'react-i18next';
import "../components/i18n"

export default function Choose({navigation}){
    const { t, i18n } = useTranslation();
    
    const pressHandler1 = () => {
        navigation.navigate('Map');
    }
    const pressHandler2 = () => {
        navigation.navigate('Home');
    }
    const pressHandler3 = () => {
        navigation.navigate('About');
    }
    
    return(
        
        <View style={styles.cont1}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hiker planner</Text>
            </View>
            <View style={styles.underline}>
                <Text></Text>
            </View>

            <View style={styles.container}>
                
                <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                    <Text style={styles.button1} onPress={pressHandler1}>{t("Map")}</Text>
                </TouchableOpacity>  

                <Text style={styles.text}>{t("Checkout some of the most visited places on Slovakia by clicking on the Map button.")}</Text>


                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.button2} onPress={pressHandler2}>{t("Where to go")}</Text>
                </TouchableOpacity> 

                <Text style={styles.text}>{t("By clicking on button, Where to go, you can take closer look of some of the most visited places on Slovakia.")}</Text>


                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text style={styles.button3} onPress={pressHandler3}>{t("Planner")}</Text>
                </TouchableOpacity> 

                <Text style={styles.text}>{t("Plan out your hiking tour.")}</Text>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    cont1:{
        flex: 1,
        backgroundColor: '#3A3F49'
    },
    container: {
        padding: 40,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    button1: {
        marginTop: 16,
        paddingVertical: 2,
        paddingHorizontal: 100,
        borderWidth: 4,
        borderColor: "#47C799",
        borderRadius: 10,
        backgroundColor: "#47C799",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        width: 300,
      },
      button2: {
        marginTop: 16,
        paddingVertical: 2,
        paddingHorizontal: 50,
        borderWidth: 4,
        borderColor: "#47C799",
        borderRadius: 10,
        backgroundColor: "#47C799",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        width: 300,
      },
      button3: {
        marginTop: 16,
        paddingVertical: 2,
        paddingHorizontal: 37,
        borderWidth: 4,
        borderColor: "#47C799",
        borderRadius: 10,
        backgroundColor: "#47C799",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        width: 300,
      },
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',
        height: 80,
        backgroundColor: '#47C799',
    },
    headerText: {
        marginTop: 35,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
        letterSpacing: 1,
        marginLeft: 25,
        
    },
    text:{
        color:'#fff',
        marginTop: 15,
        marginBottom: 15,
    },
    underline:{
        backgroundColor:"#FFC48E",
        height: 10,
    }
});

