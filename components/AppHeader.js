import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const style = StyleSheet.create({
    bar: {
        alignItems:'center',
        backgroundColor:'#ff7f50',
        padding:10,
        width:'100%',
        borderRadius: 2,
      
    }
})

const AppHeader = (props) => {
    return(
        <View style={[style.bar]}>
            <Text style={[{color:'white',fontSize:18}]}>{props.title}</Text>
        </View>
    );
}

export default AppHeader;