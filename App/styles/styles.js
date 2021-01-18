import { StyleSheet } from 'react-native';
import normalize from '../tool/normalize'

const styles = StyleSheet.create({
    app: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0E01F5',
        justifyContent: 'center'
    },
    container: {
        margin: Math.min(normalize(15), 30)
    },
    title: {
        fontSize: Math.min(normalize(20), 40),
        fontWeight: "bold"
    },
    textGroup: {
        fontSize: Math.min(normalize(15), 30)
    },
    whiteText: {
        color: '#fff'
    }
});

export default styles;
