import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput,Button , Image ,SafeAreaView} from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const img = "https://www.pngplay.com/wp-content/uploads/13/Shawn-Mendes-Transparent-File.png"
  const handleInputChange = (text) => {
    setInputText(text);
  };


  const handleDisplayButtonPress = () => {
    setDisplayText("good "+inputText+" is the Canidian Singer");
  };
  
  return (
    <SafeAreaView style={{flex :20}}> 
    <View style={ styles.container }>

    <Text style={{ margin: 30 ,fontSize: 20}} >WHO IS THAT Singer ?</Text>
    <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 2, marginBottom: 20 , marginHorizontal: 5 ,
      borderBottomRightRadius: 10,
       borderBottomLeftRadius:10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
    }}
      onChangeText={handleInputChange}
      value={inputText}
    />
    <Button
      title=  " Display "
      onPress={handleDisplayButtonPress}
    />
    <Text>{displayText}</Text>
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: img }}
          />
        </View>
  </View>
</SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    padding: 16,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
