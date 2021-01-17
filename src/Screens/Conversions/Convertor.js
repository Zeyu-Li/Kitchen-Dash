import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, Dimensions, Button, Switch, TouchableOpacity  } from 'react-native';
import convert from 'convert-units';
import SvgComponent from './Img.js';

// TODO: select picker with npm install @react-native-picker/picker --save

const Converter = () => {
    // default values
    const [dry, setDry] = useState(true);
    const defaultState = [1,3];
    const [firstValue, value1] = useState(defaultState[0]);
    const [secondValue, value2] = useState(defaultState[1]);

    // items and there translations
    const itemsDry = ['mg', 'g', 'kg', 'oz', 'lb'];
    const itemsWet = ['ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal'];
    const itemsDryTranslation = {'mg':'milligram', 'g': 'gram', 'kg': 'kilogram', 'oz':'ounce', 'lb':'pound'};
    const itemsWetTranslation = {'ml':'milliliter', 'l': 'liter', 'tsp':'teaspoon', 'Tbs':'tablespoon', 'fl-oz':'fluid-ounce', 'cup':'cup', 'pnt':'pint', 'qt':'quart', 'gal':'gallon'};

    // decide name depending on where it is dry or wet
    const name1 = () => {
        let itemName = dry ? itemsDryTranslation[itemsDry[firstValue]] : itemsWetTranslation[itemsWet[firstValue]];
        return itemName;
    }
    const name2 = () => {
        let itemName = dry ? itemsDryTranslation[itemsDry[secondValue]] : itemsWetTranslation[itemsWet[secondValue]]
        return itemName;
    }

    // use effect first and second inputs with convert-units
    const [num1, changeNum1] = useState("");
    const [num2, changeNum2] = useState("");

    // bidirectional is tricky
    useEffect(()=> {
        // base case, ie constructor therefore don't do anything
        if (num1 === '') return;
        let value = dry ? convert(num1).from(itemsDry[firstValue]).to(itemsDry[secondValue]) : convert(num1).from(itemsWet[firstValue]).to(itemsWet[secondValue]);
        // in case of int
        try {if (Math.round(value) !== value) value=value.toFixed(3);} catch {;}
        changeNum2(value);
    }, [num1, firstValue, secondValue])
    // if these values change ^^^, do the effect (acts like event listeners)

    return (
        <View style={styles.convert}>
            {/* dry/wet switch */}
            <View style={styles.masterSwitch}>
                <Text style={styles.regularText}>Wet</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={dry ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    // resets initial values
                    onValueChange={() => {setDry(c=>!c);value1(c=>defaultState[0]);value2(c=>defaultState[1])}}
                    value={dry}
                    style={[styles.switch]}
                /> 
                <Text style={styles.regularText}>Dry</Text>
            </View>
            {/* first button */}
            <View style={[styles.button]}>
                <Button title={`Change from `+ name1()} onPress={() => {
                    // changes input value
                    let len = dry ? itemsDry.length : itemsWet.length;
                    let change = firstValue + 1 < len ? 1 : -len + 1;
                    value1(c => c+change)
                }}/>
            </View>
            {/* input field */}
            <TextInput keyboardType={'numeric'} placeholder={name1()} style={[styles.containerInput]} value={num1} onChange={e => changeNum1(e.target.value)} />
            {/* touch image to switch conversion type */}
            <TouchableOpacity onPress={()=>{
                let tmp = firstValue;
                value1(secondValue);
                value2(tmp);
            }}>
                {/* <Image style={[styles.image]} source={require('@expo/../../assets/img/switcher.png')} /> */}
                <SvgComponent width={Dimensions.get('window').width / 1.5} />
            </TouchableOpacity>
            {/* output field, locked/uneditable */}
            <TextInput editable={false} keyboardType={'numeric'} placeholder={name2()} style={[styles.containerInput]} value={num2} onChange={e => changeNum2(e.target.value)} />
            {/* second button */}
            <View style={[styles.button]}>
                <Button title={`Change from `+ name2()} style={[styles.button]} onPress={() => {
                    // changes input value
                    let len = dry ? itemsDry.length : itemsWet.length;
                    let change = secondValue + 1 < len ? 1 : -len + 1;
                    value2(c => c+change)
                }}/>
            </View>
            {/* Red reset button and switch button */}
            <Button title='    Reset    ' onPress={() => {changeNum1(""); changeNum2("")}} color="#ff1938"/>
        </View>
    );
}


const styles = StyleSheet.create({
    switch: {
        margin: 10,
    },
    masterSwitch: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 2,
        // borderWidth: 2,
        // borderRadius: 4,
        // backgroundColor: '#474747',
    },
    regularText: {
        color: '#ededed',
        fontSize: 20,
        margin: 5,
    },
    convert: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInput: {
        fontSize: 30,
        color: '#ededed',
        width: Dimensions.get('window').width / 1.5,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#474747',

        // drop shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5,

        elevation: 19,
    },
    image: {
        width: Dimensions.get('window').width / 1.5 ,
        height: Dimensions.get('window').width / 1.5 * (315/1016),
        maxHeight: Dimensions.get('window').height / 1.5 * (315/1016),
        resizeMode: 'contain',
        margin: 25,
    },
    button: {
        margin: 10,
        padding: 10,
        // drop shadow
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.55,
        // shadowRadius: 5,

        // elevation: 19,
    },
});

export default Converter;
