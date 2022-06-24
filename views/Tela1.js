
import { Image, StyleSheet, Text, View, Button} from 'react-native';

export default function Tela1({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, marginTop:50, marginBottom:50}}>TIME TO STUDY</Text>
      <Image source={require('../assets/Iniciar.jpeg')}style={{width:300, height:300, marginBottom: 150}}></Image>
      <Button onPress={()=>navigation.navigate('Tela2')} title={'Começar'} color='blue'></Button>
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop:'aut',
    flexDirection: 'column'

  },
});


