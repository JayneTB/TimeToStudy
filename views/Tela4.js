import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Cartao from '../componentes/Cartao';

const dados = [ 
  {
    title: 'Guerra Fria',
    url:require('../assets/GuerraFria.jpeg.jpg'),
  },
  {
    title: '1ª Guerra Mundial',
    url:require('../assets/Guerra.jpg'),
  },
  {
    title: 'Era Vargas ',
    url:require('../assets/Vargas.jpg')
  }
]
export default function Tela4({navigation}) {
  const [value, setValue] = React.useState('')
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 15}}>
      <View style={styles.containerInput}>
        <Text style={styles.label}> Pesquisa </Text>
      <TextInput style={styles.Input} value={value} onChangeText={setValue}></TextInput>
      </View>
      <View >
        <Text style={{fontSize:22}}> Conteúdos relacionandos: </Text>
      </View>
      </View>
      
      {dados.filter((item)=>{
      return item.title.indexOf(value) != - 1
      })
      .map((item) => { 
        return <Cartao title = {item.title} url = {item.url}/>
      })}


      <View style={{marginTop:30 }}>
        <Button onPress={()=>navigation.navigate('Tela5')} title={'Avançar'} color='blue'></Button>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop:'aut'
  },

  label: {
    textAlign:'left',
    fontSize: 25,
    fontWeight: 'bold', 
    
    
   
  },
  Input: {
    backgroundColor:'white',
    padding: 1,
    fontSize: 20,
    
    

  },
  containerInput:{
    marginBottom: 10,
    
    

  }
});