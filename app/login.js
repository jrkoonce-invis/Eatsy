import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default LoginScreen = () => {
  const navigation = useNavigation(); 

  const handleGoogleSignIn = () => {

    navigation.navigate('(tabs)'); 
  };

  const handleAppleSignIn = () => {

    navigation.navigate('(tabs)'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eatsy</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAppleSignIn}>
        <Text style={styles.buttonText}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});