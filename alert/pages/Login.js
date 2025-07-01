import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Smart Ecommerce</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
          />
          
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  content: {
    flex: 0.6, // Reduced from flex: 1 to give more space to the form
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150, // Reduced from 300
    height: 150, // Reduced from 300
    resizeMode: 'contain',
    marginBottom: 10, // Reduced margin
  },
  title: {
    fontSize: 28, // Slightly smaller
    fontWeight: 'bold',
    color: '#0D62FF',
    marginBottom: 20,
  },
  buttonsContainer: {
    flex: 1, // Added flex to take remaining space
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  loginButton: {
    backgroundColor: '#0D62FF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    borderColor: '#0D62FF',
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  signupButtonText: {
    color: '#0D62FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFB4B4',
    color: '#0D62FF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  forgotPassword: {
    color: '#007AFF',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});