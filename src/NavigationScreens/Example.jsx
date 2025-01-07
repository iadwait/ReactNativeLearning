import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Platform } from 'react-native';

const exampleHello = () => {
  Alert.alert('Hello', 'Hello from Example');
};

const Example = ({ navigation, hideBackButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {!hideBackButton && (
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>Custom Header</Text>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button} onPress={exampleHello}>
          <Text style={styles.buttonText}>Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingTop: Platform.OS === 'ios' ? 8 : 0, // Add padding only for iOS to account for the status bar
    height: 60, // Explicitly set the height of the header
    paddingHorizontal: 10,
  },
  leftContainer: {
    width: 60,
    marginLeft: 10,
  },
  rightContainer: {
    width: 60,
    marginRight: 20,
  },
  button: {
    width: 70,
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    paddingVertical: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    marginTop: 0, // Ensure no top margin
  },
});
