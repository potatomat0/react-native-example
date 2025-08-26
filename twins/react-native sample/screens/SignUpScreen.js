
import React, { useState } from 'react';
import { View, Text, TextInput, Image , TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');


  const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert('Lỗi', 'Vui lòng điền vào tất cả các trường.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Lỗi', 'Mật khẩu phải dài ít nhất 6 ký tự.');
      return;
    }

    if (username.length < 3) {
        Alert.alert('Lỗi', 'Tên người dùng phải dài ít nhất 3 ký tự.');
        return;
    }

    if(!validateEmail(email)) {
      Alert.alert('Email không hợp lệ');
        return;
    }

    try {
      await axios.post('https://6874f531dd06792b9c960afa.mockapi.io/user', {
        email,
        password,
        username,
      });
      Alert.alert('Thành công', 'Tài khoản được tạo thành công!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng ký.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bookstore.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Tên người dùng"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
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
        secureTextEntry
      />
        <TouchableOpacity onPress={handleSignUp} style={styles.button} >
        <Text>Đăng ký </Text>
      </TouchableOpacity>
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
   button: {
    backgroundColor: '#4D96FF',
    borderWidth: 2,
    borderColor: '#000',
    padding: 16,
    marginTop: 10,
    maxWidth: '25%',
    alignSelf: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
     logo: {
    width: 150, // Reduced from 300
    height: 150, // Reduced from 300
    resizeMode: 'contain',
    marginBottom: 10, // Reduced margin
    alignSelf: 'center'
  },
});

export default SignUpScreen;
