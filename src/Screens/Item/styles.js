import { StyleSheet, Dimensions } from 'react-native';

export const styles =  StyleSheet.create({
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center', // <-- the magic

    },
    image: {
        width: Dimensions.get('window').width,
        height: 200,
        marginBottom: 10,
    },
    star: {
        width: 20,
        height: 20,
        flexDirection: 'row', flexWrap: 'wrap'
    },
    break: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: Dimensions.get('window').width * .9,
        marginLeft: Dimensions.get('window').width * .05,
    }
})
