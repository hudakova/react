import React from 'react';
import { StyleSheet, View, Text,  TouchableOpacity} from 'react-native';

export default function Choose({navigation}){

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

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                    <Text style={styles.button1} onPress={pressHandler1}>Map</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.button2} onPress={pressHandler2}>Where to go</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text style={styles.button3} onPress={pressHandler3}>Visited places</Text>
                </TouchableOpacity> 
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    cont1:{
        flex: 1,
        backgroundColor: '#EBFFF3'
    },
    container: {
        padding: 40,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    button1: {
        marginTop: 16,
        paddingVertical: 2,
        paddingHorizontal: 100,
        borderWidth: 4,
        borderColor: "#499567",
        borderRadius: 10,
        backgroundColor: "#499567",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      button2: {
        marginTop: 16,
        paddingVertical: 2,
        paddingHorizontal: 50,
        borderWidth: 4,
        borderColor: "#499567",
        borderRadius: 10,
        backgroundColor: "#499567",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
      button3: {
        marginTop: 16,
        paddingVertical: 2,
        paddingHorizontal: 37,
        borderWidth: 4,
        borderColor: "#499567",
        borderRadius: 10,
        backgroundColor: "#499567",
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      },
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: '#499567',
    },
    headerText: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        letterSpacing: 1,
        
    },
  
      
      
     
});

