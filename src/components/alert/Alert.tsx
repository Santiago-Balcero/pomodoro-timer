import { View, Text } from "react-native";
import { alertStyles } from "./AlertStyles";

export default function Alert () {
    return (
        <View style={alertStyles.alertContainer}>
            <Text style={alertStyles.alertText}>
                ⚠️ Can't change mode while timer is running.
            </Text>
        </View>
    );
}