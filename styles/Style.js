import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        margin: 50,
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
    },
    login: {
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').width / 1.5 * (92/382),
    },
    main: {
        marginBottom: 200,
    },
});

export {styles};
