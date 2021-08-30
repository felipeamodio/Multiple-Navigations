import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function About() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>ABOUT</Text>
      <Button title="Go to Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
