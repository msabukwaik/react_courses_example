/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ListView, Image } from 'react-native';
import data from '../data/courses.json'

const ds = new ListView.DataSource({
  rowHasChanged : (r1, r2) => r1 !== r2
});

const dataSource = ds.cloneWithRows(data);

export default class NativeCourses extends Component {

    static navigationOptions = {
        title : 'Native React Courses',
    }

  render() {
      const { goBack } = this.props.navigation;
      console.log(data);
    return (
      <View style={styles.container}>
        <Button onPress={() => goBack()} 
            title="Go Back" />

        <ListView 
          dataSource={dataSource}
          renderRow={(rowData) => 
            <View>
              <Text>{rowData.title}</Text>
              <Text>{rowData.description}</Text>
              <Text>{rowData.views}</Text>
              <Button
                title="Link to course" 
              />
              <Text>{rowData.link}</Text>
              <Image source={{uri: rowData.image}}
              style={{width: 400, height: 200}}/>
            </View>
          }
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop : 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});