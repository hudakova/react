import React, { useState } from 'react';
import { StyleSheet, View,  Text, TextInput, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
//import "C:\Users\Amalka\turask\i18n.js";


export default function AddTodo({submitHandler}){
    
    const { t, i18n } = useTranslation();

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        
        setText(val);
    }

    return(
        <View >
            <TextInput
                style={styles.input}
                placeholder={t('new place...') }
                onChangeText={changeHandler}
                
            />
            <Button onPress={() => submitHandler(text)} title={t('ADD')} color='#FFC48E' />
        </View>    
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    
    }
})