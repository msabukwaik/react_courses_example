/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation'
import App from './src/components/App'
import NativeCourses from './src/components/NativeCourses'
import ReactCourses from './src/components/ReactCourses'
import MainScreen from './src/components/MainScreen'
import ProfileScreen from './src/components/ProfileScreen'

const courses = StackNavigator({
  NativeCourses : {screen : NativeCourses},
  ReactCourses: { screen : ReactCourses},
  
});


AppRegistry.registerComponent('courses', () => courses);