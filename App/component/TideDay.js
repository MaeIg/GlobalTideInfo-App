import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/stylesTideDay';

export default function TideDay (props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.blackText]}>Day Placeholder</Text>
            <Text style={[styles.textGroup, styles.blackText]}>Haut : 3h30 (2m34)</Text>
            <Text style={[styles.textGroup, styles.blackText]}>Bas : 9h30 (1m04)</Text>
            <Text style={[styles.textGroup, styles.blackText]}>Haut : 15h30 (2m34)</Text>
            <Text style={[styles.textGroup, styles.blackText]}>Bas : 21h30 (1m04)</Text>
        </View>
    );
}
