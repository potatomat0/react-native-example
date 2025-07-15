
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity , Image, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from '../redux/actions';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập cả email và mật khẩu.');
      return;
    }

    try {
      const response = await axios.get('https://6874f531dd06792b9c960afa.mockapi.io/user');
      const user = response.data.find(u => u.email === email && u.password === password);

      if (user) {
        dispatch(loginSuccess(user));
        navigation.replace('BookManage');
      } else {
        Alert.alert('Lỗi', 'Email hoặc mật khẩu không hợp lệ.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng nhập.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bookstore.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry        style={styles.input}

      />
      <TouchableOpacity onPress={handleLogin} style={styles.button} >
        <Text> Đăng nhập </Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text>Chưa có tài khoản?</Text>
        <Button title="Đăng ký" onPress={() => navigation.navigate('SignUp')} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    // height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    // marginBottom: 12,
    // paddingLeft: 8,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: '#000',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  signUpContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
   logo: {
    width: 150, // Reduced from 300
    height: 150, // Reduced from 300
    resizeMode: 'contain',
    marginBottom: 10, // Reduced margin
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#4D96FF',
    borderWidth: 2,
    borderColor: '#000',
    padding: 16,
    maxWidth: '25%',
    alignSelf: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});

export default LoginScreen;
