import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const mainStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    view: {
      flex: 1,
      paddingHorizontal: 15,
      marginTop: Constants.statusBarHeight
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleText: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    titleIcons: {
      fontSize: 28,
    },
    button: {
      backgroundColor: '#333333',
      padding: 15,
      marginTop: 15,
      borderRadius: 25,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    alertContainer: {
        flex: 0.1,
    },
});
  