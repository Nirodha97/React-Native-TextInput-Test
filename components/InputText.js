import React from 'react';
import { Text, TextInput, View,SafeAreaView,StyleSheet } from 'react-native';

const InputText = ({onChangeText}) => {
   
    // const [number, setText] = React.useState(null);
  
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
         // value={text}
          autoFocus={true}
          placeholder="Enter the Text"
          keyboardType="default"
          textAlign='left'
        

        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      width:300,
      alignItems:'center',
      borderRadius:5,
      borderColor:'#a9a9a9',
      fontSize:20,
      margin:30,
    },
  });
  

export default InputText;