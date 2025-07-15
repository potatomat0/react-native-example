
import React, { useState } from 'react';
import { View, Text, TextInput, Image , TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }

    if (username.length < 3) {
        Alert.alert('Error', 'Username must be at least 3 characters long.');
        return;
    }

    try {
      await axios.post('https://6874f531dd06792b9c960afa.mockapi.io/user', {
        email,
        password,
        username,
      });
      Alert.alert('Success', 'Account created successfully!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while signing up.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bookstore.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Username"
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
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
        <TouchableOpacity onPress={handleSignUp} style={styles.button} >
        <Text>SignUp </Text>
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
