
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Tela3({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, fontWeight: 'bold', marginBottom:20 }}>Cadastro</Text>
      <View style={styles.containerInput}>
        <Text style={styles.label}> Nome </Text>
      <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}> Escola </Text>
      <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}> Série </Text>
      <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.label}> Matéria </Text>
      <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={{marginTop:30 }}>
        <Button onPress={()=>navigation.navigate('Tela4')} title={'Avançar'} color='blue'></Button>
      </View>
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'aut'
  },

  label: {
    textAlign:'left',
    fontSize: 18,
    fontWeight: 'bold', 
   
  },
  Input: {
    backgroundColor:'white',
    padding: 8,
    fontSize: 18,

  },
  containerInput:{
    marginBottom: 10,

  }
});