// app/login.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.contentWrapper}>

      <Text style={styles.title}>Sign In</Text>

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

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.socialButtonFacebook}>
        <Text style={styles.socialButtonText}>Login With Facebook</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.socialButtonGoogle}>
        <Text style={styles.socialButtonText}>G</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.socialButtonApple}>
        <Text style={styles.socialButtonTextApple}>Sign in with Apple</Text>
      </TouchableOpacity>

      <Link href="/phone-login" asChild>
        <TouchableOpacity>
          <Text style={styles.linkText}>Login with phone number</Text>
        </TouchableOpacity>
      </Link>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
contentWrapper: {
  width: '85%',
  alignSelf: 'center',
},

container: {
  flex: 1,
  backgroundColor: '#121212',
  paddingTop: 40,
},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A020F0',
    marginBottom: 40,
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    // maxWidth: 100,
    // alignSelf: 'center', 
  },
  forgotPassword: {
    color: '#007AFF',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtonFacebook: {
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  socialButtonGoogle: {
    backgroundColor: '#db4437',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
    width: 50,
    alignSelf: 'center',
  },
  socialButtonApple: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButtonTextApple: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16,
  },
});