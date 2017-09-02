/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProfileScreen extends Component {
    static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.name,
    });
    render() {
      const { goBack } = this.props.navigation;
      return (
        <View>
            <Button
            title="Go back"
            onPress={() => goBack()}
            />
        </View>
      );
    }
  }