import React from 'react';
import { Text, View } from 'react-native';

export default function ErrorMessage(props) {
  return (
    <View>
        <Text style={{color: "white", backgroundColor: "red"}}>
            {props.text}
        </Text>
    </View>
  );
}
