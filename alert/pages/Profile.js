import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentWrapper}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <Image 
              source={require('../assets/profile.png')} 
              style={styles.profileImage} 
            />
            <Text style={styles.userName}>Hoang Minh Nhat</Text>
            <Text style={styles.userEmail}>sirnhat0@gmail.com</Text>
          </View>

          {/* Menu Options */}
          <View style={styles.menuContainer}>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                // Navigate to change password screen (you'll need to create this)
                console.log('Change Password pressed');
              }}
            >
              <View style={styles.menuItemContent}>
                <Text style={styles.menuIcon}>🔐</Text>
                <Text style={styles.menuText}>Change Password</Text>
                <Text style={styles.menuArrow}>›</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                // Navigate to confirm email screen (you'll need to create this)
                console.log('Confirm Email pressed');
              }}
            >
              <View style={styles.menuItemContent}>
                <Text style={styles.menuIcon}>✉️</Text>
                <Text style={styles.menuText}>Confirm Email</Text>
                <Text style={styles.menuArrow}>›</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                // Navigate to transaction history screen (you'll need to create this)
                console.log('Transaction History pressed');
              }}
            >
              <View style={styles.menuItemContent}>
                <Text style={styles.menuIcon}>📄</Text>
                <Text style={styles.menuText}>Transaction History</Text>
                <Text style={styles.menuArrow}>›</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.logoutButtonText}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentWrapper: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    paddingTop: 20,
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 20,
    color: '#999',
  },
  logoutButton: {
    backgroundColor: '#ff4757',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});