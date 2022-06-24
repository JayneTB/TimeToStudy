
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela2({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, marginBottom:50 }}>TIME TO STUDY</Text>
      <View style={styles.botao}>
      <Button onPress={()=>navigation.navigate('Tela3')} title={'CRIE SUA CONTA'} color='black' ></Button>
      </View>

      <View style={styles.caixaInformacao}>
        <Text style={styles.caixaInformacaoTexto}> SUAS INFORMAÇÕES </Text>
      </View>
      <View style={styles.caixaInformacao}>
        <Text style={styles.caixaInformacaoTexto}> DEFINA SUA META DE NOTA </Text>
      </View>
      <View style={styles.caixaInformacao}>
        <Text style={styles.caixaInformacaoTexto}> DEFINA O TEMPO DE ESTUDO </Text>
      </View>
      <View style={styles.caixaInformacao}>
        <Text style={styles.caixaInformacaoTexto}> MATÉRIAS QUE VAMOS ESTUDAR </Text>
      </View>
      
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'aut'
  },
  caixaInformacao: {
    backgroundColor: 'white',
    padding: 30,
    marginBottom: 10,
    borderRadius: 20,
    width: 300,
    

  },
  caixaInformacaoTexto: {
    fontSize: 20,
    textAlign: 'center'

    

  },

  botao:{
    marginBottom:20,
  }
});