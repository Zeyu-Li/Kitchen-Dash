import { View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {styles} from './../../../styles/Style.js';

export const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
            <Image style={styles.image} source={require("./../../../img/logo.png")} />
            <TouchableOpacity onPress={()=>{
                navigation.navigate('App');
            }}>
                <Image style={styles.login} source={require("./../../../img/sign-in-button.png")} />
            </TouchableOpacity>
            </View>
        </View>
    )
}
