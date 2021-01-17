import React, { Component, useState} from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { db } from "../../../src/firebase/config.js";
import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import { styles } from "./styles.js";

const userDoc = db.collection("Users");
const success = () => {
  
  Alert.alert(
    'Success',
    "Account created!",
    [
      {
        text: 'Ok',
        onPress: () => console.log('Cancel'),
        style: 'cancel'
      }
    ],
    { cancelable: true }
  )
}
const signUpUser = (email, password) => {
  // strip email
  email = email.trim();
  try {
    console.log(email,password);
    if (password.length < 6) {
      Alert.alert(
        'Invalid',
        "Please enter a password of at least 6 characters",
        [
          {
            text: 'Ok',
            onPress: () => console.log('Cancel'),
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() =>       userDoc.add({
      email: email,
    })).then(() => success());
  } catch (error) {
    Alert.alert(
      'Invalid',
      error.toString(),
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        }
      ],
      { cancelable: true }
    );
  }
};

const loginUser = (email, password, navigation) => {
  // strip email
  email = email.trim();
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Home"))
  } catch (error) {
    Alert.alert(
      'Password or username incorrect',
      error.toString(),
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        }
      ],
      { cancelable: true }
    );
  }
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // custum alerts
  const alerter = () => {
    return (Alert.alert(
      'Password Reset',
      'Confirm password reset',
      [
        {
          text: 'Reset Password',
          onPress: () => {
            // reset password
            console.log('Reset Password')
          }
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        }
      ],
      { cancelable: true }
    )
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require(`@expo/../../img/logo.png`)} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {alerter()}
      }
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => loginUser(email, password, navigation)}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signUpUser(email, password)}>
        <Text style={styles.signUp}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
