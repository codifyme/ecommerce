import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from '../constants';

const Home = () => {
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}

const styles = Stylesheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    }
})
export default Home;

