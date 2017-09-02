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

const courses = StackNavigator({
  ReactCourses: { screen : ReactCourses},
  NativeCourses : {screen : NativeCourses},
});


AppRegistry.registerComponent('courses', () => courses);