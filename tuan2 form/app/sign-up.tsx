// app/sign-up.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Create new account</Text>

      <View style={styles.profilePicContainer}>
        <Image 
          source={require('../assets/profile.png')} 
          style={styles.profilePic} 
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Text>📷</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#888" autoCapitalize="none" />

      <View style={styles.phoneInputContainer}>
        <Text style={styles.countryCode}>🇺🇸 +1</Text>
        <TextInput style={styles.phoneInput} placeholder="Phone Number" placeholderTextColor="#888" keyboardType="phone-pad" />
      </View>

      <TouchableOpacity style={styles.sendCodeButton}>
        <Text style={styles.sendCodeButtonText}>Send code</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity>
        <Text style={styles.linkText}>Sign up with E-mail</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By creating an account you agree with our terms.
      </Text>
      </View>
    </SafeAreaView>
  );
}

// Styles are the same
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
    marginBottom: 20,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: '35%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 5,
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
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  countryCode: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    color: '#FFFFFF',
    paddingVertical: 15,
    fontSize: 16,
  },
  sendCodeButton: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  sendCodeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    color: '#888',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 20,
  },
});