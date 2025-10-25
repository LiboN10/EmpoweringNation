import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 🏠 HOME SCREEN
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: '' }} style={styles.image} />
      <Text style={styles.title}>EMPOWERING THE NATION</Text>

      <Text style={styles.subtitle}>Our Vision</Text>
      <Text style={styles.text}>
        To create a future where all individuals, especially women and youth, are empowered with
        education, skills, and opportunities.
      </Text>

      <Text style={styles.subtitle}>Our Mission</Text>
      <Text style={styles.text}>
        We are committed to equipping individuals with essential life and career skills to promote
        employment and entrepreneurship.
      </Text>

      <Text style={styles.subtitle}>Our Values</Text>
      <Text style={styles.text}>Integrity | Empowerment | Inclusivity | Growth | Respect</Text>

      
    </ScrollView>
  );
}

// 🎓 COURSES LIST SCREEN
function CoursesSummary({ navigation }) {
  const courses = [
    { title: 'First Aid', desc: 'Learn to provide basic medical assistance.' },
    { title: 'Sewing', desc: 'Master stitching, design, and garment creation.' },
    { title: 'Cooking', desc: 'Learn to prepare nutritious and delicious meals.' },
    { title: 'Child Minding', desc: 'Understand childcare and early development.' },
    { title: 'Landscaping', desc: 'Learn garden and outdoor space design.' },
    { title: 'Life Skills', desc: 'Develop essential everyday communication and planning skills.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Course Summaries</Text>
      {courses.map((course, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>{course.title}</Text>
          <Text style={styles.cardDesc}>{course.desc}</Text>
          <Button
            title="Learn More"
            color="#4CAF50"
            onPress={() => navigation.navigate('CourseDetail', { courseName: course.title })}
          />
        </View>
      ))}
    </ScrollView>
  );
}

// 📘 COURSE DETAIL SCREEN
function CourseDetail({ route }) {
  const { courseName } = route.params;
  const courseInfo = {
    'First Aid': 'Covers emergency response and CPR skills.',
    'Sewing': 'Learn pattern making, cutting, and machine operation.',
    'Cooking': 'Covers meal preparation, safety, and hygiene.',
    'Child Minding': 'Teaches early childhood care and development.',
    'Landscaping': 'Focus on garden design, soil prep, and maintenance.',
    'Life Skills': 'Enhances communication, problem-solving, and teamwork.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{courseName}</Text>
      <Text style={styles.text}>{courseInfo[courseName]}</Text>
    </View>
  );
}

// 💰 FEE CALCULATOR
function FeeCalculator() {
  const [discount, setDiscount] = useState('');
  const [total, setTotal] = useState(null);
  const baseFee = 2000;

  const calculate = () => {
    const d = parseFloat(discount) || 0;
    const result = baseFee - (baseFee * d) / 100;
    setTotal(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate Total Fees</Text>
      <Text>Each course base fee: R {baseFee}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter discount %"
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />
      <Button title="Apply Discount" color="#4CAF50" onPress={calculate} />
      {total && <Text style={styles.result}>Total Fee: R {total.toFixed(2)}</Text>}
    </View>
  );
}

// 📍 LOCATIONS
function Locations() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Our Locations</Text>
      <View style={styles.card}>
        <Text>📍 212 Modder Street, Sandton, Johannesburg</Text>
      </View>
      <View style={styles.card}>
        <Text>📍 107 Corner Kingsway & University Road, Auckland Park, Johannesburg</Text>
      </View>
      <View style={styles.card}>
        <Text>📍 Hermanus Streets, Sophiatown, Johannesburg</Text>
      </View>
    </ScrollView>
  );
}

// 📞 CONTACT
function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput placeholder="Your Name" style={styles.input} onChangeText={setName} />
      <TextInput placeholder="Your Message" style={styles.input} onChangeText={setMessage} />
      <Button title="Submit" color="#4CAF50" onPress={() => alert(`Thanks ${name}, we'll contact you soon!`)} />
      <Text style={styles.info}>Email: info@empoweringnation.org</Text>
      <Text style={styles.info}>Phone: +27 11 596 2976</Text>
    </View>
  );
}

// STACK for Courses (for inner navigation)
function CoursesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4CAF50' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="CoursesSummary" component={CoursesSummary} options={{ title: 'Courses' }} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ title: 'Course Details' }} />
    </Stack.Navigator>
  );
}

// MAIN APP with Bottom Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#777',
          tabBarStyle: { backgroundColor: '#E8F5E9', height: 60, paddingBottom: 5 },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Courses') iconName = 'book';
            else if (route.name === 'Fees') iconName = 'cash';
            else if (route.name === 'Locations') iconName = 'location';
            else if (route.name === 'Contact') iconName = 'call';

            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Courses" component={CoursesStack} />
        <Tab.Screen name="Fees" component={FeeCalculator} />
        <Tab.Screen name="Locations" component={Locations} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// 🎨 STYLES
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E8F5E9', 
    padding: 15 
  },
  image: { 
    width: '100%', 
    height: 200, 
    borderRadius: 10, 
    marginBottom: 10 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginVertical: 10 
  },
  subtitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    marginTop: 10 
  },
  text: { 
    fontSize: 14, 
    marginVertical: 4 
  },
  card: {
    backgroundColor: '#C8E6C9',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  cardDesc: { 
    fontSize: 14, 
    marginVertical: 4 
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 8,
    marginVertical: 6,
    backgroundColor: '#fff',
  },
  result: { 
    fontSize: 18, 
    marginTop: 10, 
    color: '#2E7D32' 
  },
  info: { 
    marginTop: 10, 
    fontSize: 14 
  },
  
});
