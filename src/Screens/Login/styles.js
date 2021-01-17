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
        width: Dimensions.get('window').width * .5,
        height: Dimensions.get('window').width * .5,
        marginBottom: 20,
    },
    container: {
      flex: 1,
      backgroundColor: "#D9F1FF",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#fb5b5a",
      marginBottom: 40,
    },
    inputView: {
      width: "80%",
      backgroundColor: "#fcfcfc",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
    },
    inputText: {
      height: 50,
      color: "white",
    },
    forgot: {
      color: "black",
      fontSize: 11,
    },
    loginBtn: {
      width: "80%",
      backgroundColor: "#025ef2",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10,
    },
    loginText: {
      color: "white",
    },
    signUp: {
      color: "black",
    },
})
