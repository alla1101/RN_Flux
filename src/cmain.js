import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import {increment, decrement, zero } from './actions';
class cmain extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>
        Countly
        </Text>
        <Text style={styles.tally}>
        Tally: 0
        </Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={zero}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default cmain;
