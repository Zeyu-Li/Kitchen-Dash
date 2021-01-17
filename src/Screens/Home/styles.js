import { StyleSheet, Dimensions } from 'react-native';

export const styles =  StyleSheet.create({
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    title: {
        fontWeight: "bold",
    },
    image: {
        width: Dimensions.get('window').width * .8,
        height: 200,
    },
    star: {
        width: 20,
        height: 20,
    }
})
