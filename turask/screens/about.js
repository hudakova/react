import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';
import AsyncStorage from '@react-native-community/async-storage';
import { initial } from 'react-native/Libraries/Animated/src/Easing';


export default function About(){

    

    const [todos, setTodos] = useState(() => {
        var initial = [
            {text: 'Tatry', key: 1},
            {text: 'Betliar', key: 2},
            
        ];
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    initial.push({text: stores[i][1], key: stores[i][0]});
                });
            });
          });
          return initial;
    });

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
        AsyncStorage.removeItem(key);
    }

    

    const submitHandler = (text) => {
        
        if(text.length > 3){
            var key = Math.random().toString();
            setTodos((prevTodos) => {
                return [
                    { text: text, key: key},
                    ...prevTodos
                ];
            })
            AsyncStorage.setItem(key, text);
        }
        else{
            Alert.alert('oops', 'todo must be over 3 chars long',[
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
        }
        
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            console.log('dismissed keyboard');
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <AddTodo submitHandler ={submitHandler}/>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                                <TodoItem item={item} pressHandler ={pressHandler}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    content: {
        flex:1,
        padding:40,
    },
    list: {
        flex: 1,
        marginTop: 20,
    }
});