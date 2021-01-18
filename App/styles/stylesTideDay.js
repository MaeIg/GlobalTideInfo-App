import { StyleSheet } from 'react-native';
import normalize from '../tool/normalize'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        margin: Math.min(normalize(5), 10),
        flex: 1
    },
    title: {
        fontSize: Math.min(normalize(13), 26),
        fontWeight: "bold"
    },
    textGroup: {
        fontSize: Math.min(normalize(11), 22)
    },
    blackText: {
        color: 'black'
    }
});

export default styles;
