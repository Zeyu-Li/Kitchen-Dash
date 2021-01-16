import { Routes } from './src/Routes.js';

import {Login} from './src/routes/tabs/Login.js'

const LoginAuth = createStackNavigator();

import Login from './src/routes/components/Login'

export default function App() {
  return (
    <NavigationContainer>
      <LoginAuth.Navigator initialRouteName='Login'>
      <LoginAuth.Screen name = "Login" component={Login} />

      </LoginAuth.Navigator>
    </NavigationContainer>
  );
}


function testLogin({ navigation }) {
  return (
    <View>
      <Text>Hello, please log in</Text>
      <Button title='Log In' onPress={() => {
        navigation.navigate('App');
      }} />
    </View>
  )
}
