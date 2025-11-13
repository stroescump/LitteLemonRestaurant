import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView indicatorStyle='white'
        style={{
          flex: 1,
          paddingHorizontal: 40,
          paddingVertical: 40,
        }}>
        <Text
          style={{
            padding: 40,
            fontSize: 50,
            color: '#EDEFEE',
            textAlign: 'center',
          }}>
          Welcome to Little Lemon
        </Text>
        <Text
          style={{
            fontSize: 50,
            padding: 20,
            marginVertical: 8,
            color: '#EDEFEE',
            textAlign: 'center',
          }}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}