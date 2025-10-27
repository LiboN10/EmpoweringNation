import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function CoursesMainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Course Type</Text>

      <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('SixWeekCourses')}>
        <Text style={styles.mainButtonText}>Six-Week Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('SixMonthCourses')}>
        <Text style={styles.mainButtonText}>Six-Month Courses</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF3',
  },
  headerContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5,
  },
  description: {
    textAlign: 'center',
    fontSize: 15,
    color: '#555',
    marginHorizontal: 20,
    marginVertical: 20,
    lineHeight: 22,
  },
  cardsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    elevation: 4,
    alignItems: 'center',
  },
  cardGreen: {
    borderLeftWidth: 6,
    borderLeftColor: '#2E8B57',
  },
  cardOrange: {
    borderLeftWidth: 6,
    borderLeftColor: '#FFA500',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 20,
  },
});