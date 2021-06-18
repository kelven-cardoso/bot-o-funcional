import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, Button, Image, SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';


export default function App() {
  
  return (
   
    <SafeAreaView style={{
    backgroundColor: "#fff",
    flex: 1
    }}>
<Image
source={{
  height: 500,
  width: 411,
  justifycontent: 'center' , 
  uri: 'https://picsum.photos/200/300'
 
}}
/> 


<TextInput
placeholder= 'Digite Seu Nome Confirme'
style={{
  borderBottomColor: 'red',
  borderBottomWidth: 10,
  top: 50,
  right: 30,
  alignSelf: 'center',

}}/>

<Button 
title='Confirme'
onPress={ () => alert('Atividade Kelven')} />



<Button
  title='CONFIRMAR'
  onPress={() =>
    Alert.alert('Duas opções', 'escolha sim ou não', [
     { text: 'SIM', onPress: () => console.log('YES')},
     { text: 'NÃO', onPress: ()=> console.log('NOT')},
    ]  )
  } 
/>


</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
