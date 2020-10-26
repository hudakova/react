import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Pressable, Image, Linking} from 'react-native';


export default function App() {

  const [phoneNumber, setNumber] = useState("");
  const [call, setCall] = useState(false);

  const toggle = function() {
    setCall(!call)
    if(!call)
      Linking.openURL(`tel:${phoneNumber}`)
  };

  const Backspace = function() {
    if (phoneNumber.length >= 0) {
      return(
        <Pressable onPress={() => { setNumber(phoneNumber.slice(0, -1))}} onLongPress={() => { setNumber("")}}>
          <Image source={backspace} style={styles.image}/>
        </Pressable>
      );
    }
    else
      return null;
  };

  let backspace=require("./assets/delete.png")
  let rows=[]
  let nums=[[1,2,3], [4,5,6], [7,8,9], ['*',0,'#']]
  let chars=[['O_O','ABC','DEF'], ['GHI','JKL','MNO'], ['PQRS','TUV','WXYZ'], ['','+','']]

  var image = call
    ? require("./assets/telephone.png")
    : require("./assets/telephone.png");

  for(let i=0;i<4;i++){
    let row=[]
    for(let j=0;j<3;j++){
      row.push(<TouchableOpacity key={`button-${i}-${j}`} style={styles.numButton} onPress={ () => { setNumber(phoneNumber + nums[i][j])} } onLongPress={ () => { nums[i][j]==0 ? setNumber(phoneNumber + '+') : null} }>
        <Text style={styles.nums}>{nums[i][j]}</Text>
        <Text style={styles.numText}>{chars[i][j]}</Text>
      </TouchableOpacity>)
    }
    rows.push(<View style={styles.row}>{row}</View>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.greenBar}>
        <Text style={styles.greenBarText}>Phone</Text>
      </View>

      <View style={styles.typeBar}>
        <Text style={styles.typeBarText}>{phoneNumber}</Text>
      </View>

      <View style={styles.numpad}>
          <View style={styles.numbers}>
            {rows}
          </View>
      </View>

      <View style={styles.bottomBar}>
        <Pressable style={call == false ? styles.greenButton : styles.redButton} onPress={toggle}>
          <Image source={image} style={styles.image}/>
        </Pressable>
        {Backspace()}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  greenBar: {
    flex: 1.7,
    backgroundColor: '#45B41E',
    width: '100%',
    paddingTop: 20,
    paddingLeft: 15,
  },

  greenBarText:{
    color: 'white',
    fontSize: 25,
    textAlign: 'left',
  },

  typeBar:{
    flex:3,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  numpad:{
    flex: 6,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },

  numbers:{
    flex: 1,
    backgroundColor: 'white'
  },

  bottomBar:{
    flex: 1.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: '27%'
  },

  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  typeBarText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },

  numButton:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: 'gray'
  },

  nums:{
    fontSize: 40
  },

  numText:{
    fontSize: 10,
    color: 'gray'
  },

  image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain'
},

  greenButton:{
    width: 130,
    height: '80%',
    backgroundColor: '#45B41E',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    alignSelf: 'center',
    
  },

  redButton:{
    width: 130,
    height: '80%',
    backgroundColor: 'red',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    alignSelf: 'center'
  },

});
