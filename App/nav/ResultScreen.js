import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Tide from '../component/Tide';
import styles from "../styles/styles";

export default function resultScreen ({ navigation, route }) {
  return (
    <View style={styles.app}>
      <StatusBar 
        backgroundColor={'transparent'} 
        translucent={true} 
        barStyle='light-content' 
      />
      <Tide />
    </View>
  );
}
