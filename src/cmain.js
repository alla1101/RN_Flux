import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class cmain extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Trying out git with React Native as a begining, let's see how it rolls!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default cmain;
