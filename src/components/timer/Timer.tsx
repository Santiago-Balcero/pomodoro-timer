import { View, StyleSheet, Text } from 'react-native';
import { timerStyles } from './TimerStyles';

export default function Timer({time}: any) {

    const formattedTime = `${Math.floor(time/60)
        .toString()
        .padStart(2, '0')}:${(time % 60)
        .toString()
        .padStart(2, '0')}`;

    return (
        <View style={timerStyles.container}>
            <Text style={timerStyles.time}>
                {formattedTime}
            </Text>
        </View>
    );
}

