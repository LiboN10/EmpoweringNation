import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function BookingSuccessScreen({ navigation }) {

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>🎉 Booking Successful!</Text>
      <Text style={styles.message}>
        Thank you for booking your courses with Empowering the Nation.
      </Text>
      <Text style={styles.message}>
        A confirmation email will be sent to you shortly.
      </Text>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  homeButton: {
    marginTop: 30,
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
