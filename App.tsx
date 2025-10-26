import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TextInput, Image,TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesMain" component={CoursesMainScreen} options={{ title: 'Courses' }} />
      <Stack.Screen name="SixWeekCourses" component={SixWeekCoursesScreen} options={{ title: 'Six-Week Courses' }} />
      <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} options={{ title: 'Six-Month Courses' }} />
      <Stack.Screen name="CourseDetails" component={ CourseDetail} options={{ title: 'Course Details' }} />
    </Stack.Navigator>
  );
}


// 🏠 HOME SCREEN
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: '' }} style={styles.image} />
      <Text style={styles.title}>EMPOWERING THE NATION</Text>

      <Text style={styles.subtitle}>Our Vision</Text>
      <Text style={styles.text}>
        To create a future where every domestic worker and gardener has access to affordable, 
        practical skills training that unlocks better opportunities, 
        promotes self-reliance, and uplifts entire communities through empowered, 
        skilled, and confident individuals.
      </Text>

      <Text style={styles.subtitle}>Our Mission</Text>
      <Text style={styles.text}>
        We are committed to equipping individuals with quality training programmes 
        that enhance employability, foster entrepreneurship, and inspire dignity.
        Our mission is to transform untapped potential into sustainable success, 
        strengthening both households and communities across South Africa.
      </Text>

      <Text style={styles.subtitle}>Our Values</Text>
      <Text style={styles.text}>
        At Empowering the Nation, our values are rooted in creating opportunities that uplift 
        individuals and communities. We believe in dignity, self-reliance, and lifelong learning.
        By providing high-quality, practical skills training, we empower people to improve their 
        and unlock their full potential. We are committed to inclusivity, professionalism,
        and respect, ensuring that every participant feels valued. Our goal is to inspire confidence,
        encourage entrepreneurship, and create lasting, positive change across households and society.

      </Text>

      
    </ScrollView>
  );
}

// ======= COURSES MAIN SCREEN (shows two buttons) =======
function CoursesMainScreen({ navigation }) {
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

//
// ======= SIX-WEEK COURSES PAGE =======
function SixWeekCoursesScreen({ navigation }) {
  const sixWeekCourses = [
    {
      id: 1,
      title: 'Sewing',
      description: 'Learn hand and machine sewing fundamentals for repairing and creating garments.',
      fullDescription:
        'A hands-on six-week course teaching basic sewing, hemming, pattern reading, and garment creation. Ideal for beginners who want creative skills for home or small business use.',
    },
    {
      id: 2,
      title: 'Life Skills',
      description: 'Build personal and social skills for effective communication and confidence.',
      fullDescription:
        'This six-week program focuses on building communication, problem-solving, and emotional intelligence for everyday challenges.',
    },
    {
      id: 2,
      title: 'Life Skills',
      description: 'Build personal and social skills for effective communication and confidence.',
      fullDescription:
        'This six-week program focuses on building communication, problem-solving, and emotional intelligence for everyday challenges.',
    },
  ];

 return (
    <ScrollView style={styles.coursePage}>
      <Text style={styles.pageHeader}>🌿 Six-Week Courses</Text>
      <Text style={styles.pageSubtext}>Short, powerful, and practical learning programs.</Text>

      {sixWeekCourses.map((course) => (
        <View key={course.id} style={styles.courseCard}>
          <Image source={course.image} style={styles.courseImageStyled} />
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => navigation.navigate('CourseDetails', { course })}
          >
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}


//
// ======= SIX-MONTH COURSES PAGE =======
function SixMonthCoursesScreen({ navigation }) {
  const sixMonthCourses = [
    {
      id: 3,
      title: 'First Aid',
      description: 'Gain lifesaving skills including CPR, wound care, and emergency response.',
      fullDescription:
        'This six-month course provides training in emergency medical response, including CPR, wound care, and stabilizing patients before professional help arrives.',
    },
    {
      id: 4,
      title: 'Landscaping',
      
      description: 'Learn garden design, planting, and eco-friendly outdoor maintenance.',
      fullDescription:
        'A six-month practical course focusing on garden layout, soil care, plant selection, and landscaping design for homes or businesses.',
    },
  ];

  return (
    <ScrollView style={styles.coursePage}>
      <Text style={styles.pageHeader}>🌻 Six-Month Courses</Text>
      <Text style={styles.pageSubtext}>In-depth, career-focused training for long-term growth.</Text>

      {sixMonthCourses.map((course) => (
        <View key={course.id} style={styles.courseCard}>
          <Image source={course.image} style={styles.courseImageStyled} />
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => navigation.navigate('CourseDetails', { course })}
          >
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
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
      <Button title="Submit" color="#61C316" onPress={() => alert(`Thanks ${name}, we'll contact you soon!`)} />
      <Text style={styles.info}>Email: info@empoweringnation.org</Text>
      <Text style={styles.info}>Phone: +27 11 596 2976</Text>
    </View>
  );
}


// MAIN APP with Bottom Navigations
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#C9EBD6' },
          headerTitleAlign: 'center',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#2E8B57',
          tabBarStyle: { backgroundColor: '#90EE90', paddingBottom: 5 },
          // 💡 Add icons for each tab here
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Courses') {
              iconName = 'book';
            } else if (route.name === 'Fees') {
              iconName = 'cash';
            } else if (route.name === 'Contact Us') {
              iconName = 'call';
            }else if (route.name === 'Location') {
              iconName = 'location';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Courses" component={CoursesStack} options={{ headerShown: false }} />
        <Tab.Screen name="Fees" component={FeeCalculator} />
        <Tab.Screen name="Location" component={Locations} />
        <Tab.Screen name="Contact Us" component={Contact} />
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
    backgroundColor: '#008CFF',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  courseImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#ffffffff',
    marginBottom: 10,
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

  // --- COURSE PAGE STYLES ---
coursePage: {
  flex: 1,
  backgroundColor: '#F6FFF3',
  paddingHorizontal: 15,
  paddingTop: 20,
},

pageHeader: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#2E8B57',
  textAlign: 'center',
  marginBottom: 5,
},

pageSubtext: {
  fontSize: 15,
  color: '#555',
  textAlign: 'center',
  marginBottom: 20,
},

courseCard: {
  backgroundColor: 'white',
  borderRadius: 16,
  padding: 15,
  marginVertical: 10,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 3,
},

courseImageStyled: {
  width: '100%',
  height: 200,
  borderRadius: 12,
  marginBottom: 10,
},

courseTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#2E8B57',
  marginBottom: 5,
},

courseDescription: {
  fontSize: 15,
  color: '#444',
  marginBottom: 15,
  lineHeight: 22,
},

learnMoreButton: {
  backgroundColor: '#2E8B57',
  paddingVertical: 10,
  borderRadius: 10,
  alignItems: 'center',
},

learnMoreText: {
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
},

  
});
