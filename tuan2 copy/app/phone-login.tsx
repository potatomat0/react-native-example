// app/phone-login.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';




export default function PhoneLoginScreen() {
	return (
		<SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
            <Text style={styles.title}>Sign In</Text>

		<View style={styles.phoneInputContainer}>
		<Text style={styles.countryCode}>🇺🇸 +1</Text>
		<TextInput
		style={styles.phoneInput}
		placeholder="Phone number"
		placeholderTextColor="#888"
		keyboardType="phone-pad"
		/>
		</View>

		<TouchableOpacity style={styles.sendCodeButton}>
		<Text style={styles.sendCodeButtonText}>Send code</Text>
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

		<Link href="/login" asChild>
		<TouchableOpacity>
		<Text style={styles.linkText}>Sign in with E-mail</Text>
		</TouchableOpacity>
		</Link>
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
		marginBottom: 40,
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
