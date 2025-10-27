import React from 'react';
import { View, Text, TouchableOpacity,  } from 'react-native';


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
