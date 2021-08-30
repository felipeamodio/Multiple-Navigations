import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>HOME</Text>

      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
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
