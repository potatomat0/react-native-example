import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Button , TextInput , TouchableOpacity, Image, SafeAreaView } from 'react-native';
// import the other screens/pages 
import Products from './pages/ProductPage';
import Login from './pages/Login';
import SignUpScreen from './pages/SignUp';

// create the stack navigator const 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login screen */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Welcome',
          }}
        /> 

        {/* Products screen */}
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'Product Browse',
            headerStyle: {
              backgroundColor: '#FFF',
            },
          }}
        /> 

        {/* Sign Up screen */}
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#FFF',
            }
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}