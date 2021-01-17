import { StyleSheet, Dimensions } from 'react-native';

export const styles =  StyleSheet.create({
    button: {
        fontSize: 20,
        marginBottom: 10,
    },
    bold: {
        fontWeight: "bold",
        fontSize: 40,
    }, img: {
        width: Dimensions.get('window').width * .5,
        height: Dimensions.get('window').width * .5,
    }
})
