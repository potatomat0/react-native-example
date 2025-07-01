// ProductPage.js
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back to Login</Text>
      </TouchableOpacity> */}
      <Image
        source={require('../assets/header.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#000',
    paddingTop: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 120,
    resizeMode: 'contain',
  },
});

export default CustomHeader;
