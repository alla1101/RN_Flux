import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from "./Styles";
import {increment, decrement, zero } from './actions';
import TallyStore from './TallyStore';
class cmain extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tally:TallyStore.getTally()
    };
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount(){
    TallyStore.addChangeListener(this.updateState);
  }
  componentWillUnmount(){
    TallyStore.removeChangeListener(this.updateState);
  }
  updateState(){
    this.setState({
      tally:TallyStore.getTally()
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>
        Countly
        </Text>
        <Text style={styles.tally}>
        Tally: {this.state.tally.count}
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
