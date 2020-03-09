import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import from local files
import Firebase from './firebaseInit';
//components
import Login from './components/login';
import Pain from './components/Pain';
import Jambon from './components/Jambon';
import Fromage from './components/Fromage';
import Ingredients from './components/Ingredients';


// Get a reference to the database service
var db = Firebase.database();
const firestrore = Firebase.firestore();


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Ingredients" component={Ingredients} />
        <Tab.Screen name="Pain" component={Pain} />
        <Tab.Screen name="Jambon" component={Jambon} />
        <Tab.Screen name="Fromage" component={Fromage} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}