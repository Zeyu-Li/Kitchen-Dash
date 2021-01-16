import React, {useState, useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { Container, Header, Label, Title, Form, Item, Input, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const firebaseConfig = {
    apiKey: "AIzaSyBbbdNwXhLKaDlmQIxoj6Rdx73wQiBPUuA",
    authDomain: "kitchen-dash-aa6d0.firebaseapp.com",
    projectId: "kitchen-dash-aa6d0",
    storageBucket: "kitchen-dash-aa6d0.appspot.com",
    databaseURL: "https://kitchen-dash-aa6d0-default-rtdb.firebaseio.com/"
  }

const fbApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(fbApp);

const userDoc = db.collection('Users')



  const signUpUser = (email, password) => {
    try{
      if(password.length<6){
        alert("please enter atleast 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  const loginUser = (email, password,navigation) => {
    console.log(email)
    try{
      firebase.auth().signInWithEmailAndPassword(email, password) // Look at this Ben!!!! this is where I want to connect to home
      .then(
        userDoc.add({
          email: email
        })

      )
    }
    catch(error){
      console.log(error.toString())
    }
  }

  const Login = ({navigation}) => {
      const [isReady, setReady] =  useState(false);
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');



useEffect(() => {
(async () =>{
  await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });
  setReady(true);
})()
}, [])


    if (!isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Calorie Calculator</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => setEmail(email)}

                />
            </Item>

            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText= {password => setPassword(password)}

                />
            </Item>

            <Button style={{marginTop: 10}}
                full
                rounded
                success
                onPress= {() => loginUser(email, password, navigation)}

            >
                <Text> Login</Text>
            </Button>

            <Button style={{marginTop: 10}}
                full
                rounded
                primary
                onPress= {() => signUpUser(email, password)}

            >
                <Text style={{color: "white"}}> Sign up</Text>
            </Button>

            </Form>

      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>food-o-meter 2021™</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    );
  }

export default Login;