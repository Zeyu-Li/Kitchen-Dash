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
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#3F51B5',
        padding: 8,
    },
    searchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 2,
        height: 40,
        paddingHorizontal: 10,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 17,
        height: '100%',
    },
    content: {
        padding: 10,
    },
    card: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0 2px 1.5px rgba(0, 0, 0, 0.1)',
    },
    cardItem: {
        paddingHorizontal: 17,
        paddingVertical: 12,
    },
    stars: {
        flexDirection: 'row',
    },
})
