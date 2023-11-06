import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Search = () => {
    return(
        <View style={StyleSheet.container} >
            <TextInput style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }} placeholder='        Search: Part Name/Number      '/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '70%',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 10
    },
});

export default Search;