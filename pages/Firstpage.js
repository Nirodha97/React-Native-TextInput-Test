import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import InputText from '../components/InputText';



const style1 = StyleSheet.create({
    center:{
        alignItems:'center',
    }
})

class Firstpage extends React.Component{
    
state = {
    name: "",
};
   
handleText =(text) => {
    this.setState({name:text})
};
//state = {text1: 23+5, text2: null, result: null};
      
   render(){
    return(
        <View style={[style1.center]}>
            <AppHeader title='Text Input Text'/>
            <InputText onChangeText={(text) =>this.handleText(text)} />
            
            {/* <InputText/> */}
           
            <Text>Result </Text>
            <Text style={[{fontSize:20,padding:10}]}> {this.state.name}</Text>
        </View>
    );
}
}

export default Firstpage;