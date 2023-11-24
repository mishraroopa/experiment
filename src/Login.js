import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Login = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'blue' }}>
      <Text style={{ color: 'black', alignSelf: 'center', width: '40%', height: '20%', borderColor: 'red' }}>hello</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()}  />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
