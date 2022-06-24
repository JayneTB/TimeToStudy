
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Tela5() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/atencao.jpeg')}style={{width:300, height:300, marginBottom: 150}}></Image>
      <Text style={{fontSize:50, marginTop:50, marginBottom:50}}>Oh Não!!</Text>
      <Text style={{fontSize:20, marginTop:20, marginBottom:20}}> Você burlou nossas regras!</Text>
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
});