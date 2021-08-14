/**
 * This component is responsible for setting up the navigation routes that
 * are used throughout the whole application
 */

import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import * as views from './components/views';
import Home from './components/views/Home';
import Signin from './components/views/Signin';
import Signup from './components/views/Signup';
import MyAssessments from './components/views/myAssessments';
import MyProfile from './components/views/myProfile';
import SectionQuestions from './components/views/sectionQuestions';
import PrevReports from './components/views/PrevReports';
export const Stack = createStackNavigator ();  
AppRegistry.registerComponent('myGRiST', () => Stack);

export default function _LoginStack() {
  return (        
    <NavigationContainer>          
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Sign In" screenProps={{navigation: this.navigation}}>
      <Stack.Screen name="Sign In" component={Signin}  />
      <Stack.Screen name="Sign up" component={Signup}  />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name ="myAssessments" component={MyAssessments}/>
      <Stack.Screen name ="myProfile" component={MyProfile}/>
      <Stack.Screen name ="SectionQuestions" component={SectionQuestions}/>
      <Stack.Screen name ="PrevReports" component={PrevReports}/>
      </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
