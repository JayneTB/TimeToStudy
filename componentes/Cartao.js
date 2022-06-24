import { Image, StyleSheet, Text, View, Button} from 'react-native';

export default function Cartao({
    title,
    url
}) {
  return (
    <View>
        <Text style={{fontSize: 20}}> {title} </Text>
      <Image source={url}style={{width:200, height:150, marginBottom:15  }}></Image>
      </View>
    
  );
}



const styles = StyleSheet.create({
  
});
