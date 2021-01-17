import React from "react";
import AppLoading from "expo-app-loading";
import {
  Container,
  Header,
  Label,
  Title,
  Form,
  Item,
  Input,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Roboto,
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {db} from "../../../src/firebase/config.js";
import firestore from "@react-native-firebase/firestore";
import Home from "../Home/Home";

const userDoc = db.collection("Users");
const signUpUser = (email, password) => {
  try {
    if (password.length < 6) {
      alert("please enter atleast 6 characters");
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error.toString());
  }
};

const loginUser = (email, password, navigation) => {
  try {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Home"))
      .then(
        userDoc.add({
          email: email,
        })
      );
  } catch (error) {
    console.log(error.toString());
  }
};

const Login = ({ navigation }) => {
  const [isReady, setReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setReady(true);
    })();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
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
              onChangeText={(email) => setEmail(email)}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => setPassword(password)}
            />
          </Item>

          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => loginUser(email, password, navigation)}
          >
            <Text> Login</Text>
          </Button>

          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => signUpUser(email, password)}
          >
            <Text style={{ color: "white" }}> Sign up</Text>
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
};

export default Login;
