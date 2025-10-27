import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function FeeCalculator({ navigation }) {
  const allCourses = [
    { name: 'First Aid (6 Months)', price: 3000 },
    { name: 'Landscaping (6 Months)', price: 3000 },
    { name: 'Sewing (6 Weeks)', price: 800 },
    { name: 'Life Skills (6 Weeks)', price: 800 },
  ];

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAddCourse = () => {
    if (selectedCourse && !selectedCourses.includes(selectedCourse)) {
      setSelectedCourses([...selectedCourses, selectedCourse]);
    }
  };

  const handleRemoveCourse = (courseName) => {
    setSelectedCourses(selectedCourses.filter((c) => c !== courseName));
  };

  const calculateTotal = () => {
    let total = selectedCourses.reduce((sum, name) => {
      const course = allCourses.find((c) => c.name === name);
      return sum + (course ? course.price : 0);
    }, 0);

    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05;
    else if (selectedCourses.length === 3) discount = 0.10;
    else if (selectedCourses.length > 3) discount = 0.15;

    const discountedTotal = total - total * discount;
    return discountedTotal;
  };

  const totalFee = calculateTotal();
  const discountLabel =
    selectedCourses.length === 1
      ? 'No discount'
      : selectedCourses.length === 2
      ? '5% discount'
      : selectedCourses.length === 3
      ? '10% discount'
      : selectedCourses.length > 3
      ? '15% discount'
      : '';

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>💰 Fee Calculator</Text>
      <Text style={styles.subtext}>Select and add courses below to calculate your total.</Text>

      {/* Picker dropdown for selecting courses */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Select Course:</Text>
        <Picker
          selectedValue={selectedCourse}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        >
          <Picker.Item label="-- Choose a course --" value="" />
          {allCourses.map((course) => (
            <Picker.Item key={course.name} label={course.name} value={course.name} />
          ))}
        </Picker>
        <TouchableOpacity style={styles.addButton} onPress={handleAddCourse}>
          <Text style={styles.addButtonText}>Add Course</Text>
        </TouchableOpacity>
      </View>

      {/* Display selected courses */}
      <Text style={styles.label}>Selected Courses:</Text>
      {selectedCourses.length === 0 ? (
        <Text style={styles.emptyText}>No courses added yet</Text>
      ) : (
        selectedCourses.map((courseName) => (
          <View key={courseName} style={styles.courseRow}>
            <Text style={styles.courseName}>{courseName}</Text>
            <TouchableOpacity onPress={() => handleRemoveCourse(courseName)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      {/* Results and discounts */}
      <View style={styles.resultBox}>
        <Text style={styles.resultLabel}>Courses Selected:</Text>
        <Text style={styles.resultValue}>{selectedCourses.length}</Text>
      </View>
      <View style={styles.resultBox}>
        <Text style={styles.resultLabel}>Discount Applied:</Text>
        <Text style={styles.resultValue}>{discountLabel}</Text>
      </View>
      <View style={styles.resultBoxTotal}>
        <Text style={styles.totalLabel}>Total Fee:</Text>
        <Text style={styles.totalAmount}>R {totalFee.toFixed(2)}</Text>
      </View>

      {/* Confirm Booking */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate('BookingSuccess')}
      >
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// ======= STYLES =======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF3',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E8B57',
    textAlign: 'center',
    marginTop: 10,
  },
  subtext: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#2E8B57',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  emptyText: {
    color: '#777',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  courseName: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
  resultBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  resultBoxTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  resultValue: {
    fontSize: 16,
    color: '#2E8B57',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  bookButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
