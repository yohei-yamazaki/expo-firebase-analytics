import * as React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';
import * as Analytics from 'expo-firebase-analytics';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const recordOnPressLog = () => {
    Analytics.logEvent('onPress');
    Alert.alert('OnPress');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button onPress={recordOnPressLog} title="Record Log Event" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
