import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
//import CheckBox from 'react-native-check-box';
//import {db} from './src/config';


export default function Home({navigation}){

    const [doneState, setDone] = useState(false);

    const onCheck = () => {
        setDone(!doneState);
    };

    const [reviews, setReviews] = useState([
        {title: 'Vysoké Tatry ', rating: 1,  key: '1'},
        {title: 'Nízke Tatry ', rating: 2,  key: '2'},
        {title: 'Slovenský raj', rating: 3,  key: '3'},
        {title: 'Slovenský kras', rating: 4,  key: '4'},
        {title: 'Bratislavský hrad', rating: 5,  key: '5'},
        {title: 'Spišský hrad', rating: 6, key: '6'},
        {title: 'Bojnický zámok', rating: 7,  key: '7'},
        {title: 'Kaštieľ Betliar ', rating: 8, key: '8'},
    ]);
    
    return(
        <View style={styles.container}>
            {/* <CheckBox
                checkBoxColor="skyblue"
                onClick={onCheck}
                isChecked={doneState}
                disabled={doneState}
            /> */}
            <FlatList
               data={reviews} 
               renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                       <Text style={styles.bar} >{ item.title }</Text> 
                    </TouchableOpacity>
               )}
               
            />  
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor: '#3A3F49',
    },
    bar: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 10,
        textAlign: "center",
        color: '#fff',
        backgroundColor: '#525967',
      },
});