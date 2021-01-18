import React from 'react';
import { Text, View } from 'react-native';
import styles from "../styles/styles";

export default function Description() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.whiteText]}>How to use Global Tide Info ?</Text>
      <Text style={[styles.textGroup, styles.whiteText]}>You can search for a city or a port to find out the tide for the coming week. If the requested city is not listed in the database, it will show the tide for the nearest port.</Text>
    </View>
  );
}
