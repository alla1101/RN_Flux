import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from "./Styles";
import {increment, decrement, zero } from './actions';
import Store from './Store';

class cmain extends React.Component {
  constructor(props){
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state={
      tally: Store.getState(),
      unsubscribe: Store.subscribe(this.updateState)
    };
  }

  componentDidMount(){
    this.setState({
      unsubscribe: Store.subscribe(this.updateState)
    });
  }
  componentWillUnmount(){
    this.state.unsubscribe();
  }
  updateState(){
    this.setState({
      tally: Store.getState(),
      unsubscribe: Store.subscribe(this.updateState)
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
        <TouchableOpacity style={styles.button} onPress={()=>Store.dispatch(increment())}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>Store.dispatch(decrement())}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>Store.dispatch(zero())}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default cmain;
