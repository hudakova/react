import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        {title: 'Vysoké Tatry ', rating: 1, body: 'lorem ipsum', key: '1'},
        {title: 'Nízke Tatry ', rating: 2, body: 'lorem ipsum', key: '2'},
        {title: 'Slovenský raj', rating: 3, body: 'lorem ipsum', key: '3'},
        {title: 'Slovenský kras', rating: 4, body: 'lorem ipsum', key: '4'},
        {title: 'Bratislavský hrad', rating: 5, body: 'lorem ipsum', key: '5'},
        {title: 'Spišský hrad', rating: 6, body: 'lorem ipsum', key: '6'},
        {title: 'Bojnický zámok', rating: 7, body: 'lorem ipsum', key: '7'},
        {title: 'Kaštieľ Betliar ', rating: 8, body: 'lorem ipsum', key: '8'},
    ]);
    
    return(
        <View style={styles.container}>
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
        backgroundColor: '#EBFFF3',
    },
    bar: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        textAlign: "center",
      },
});