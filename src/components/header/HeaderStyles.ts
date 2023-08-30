import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    item: {
        width: '33%',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 25,
        padding: 5,
        alignItems: 'center',
        marginVertical: 15,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});