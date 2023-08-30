import { View, Text, TouchableOpacity } from "react-native";
import { TimeModes } from "../../constants/TimeModes";
import { headerStyles } from "./HeaderStyles";

const timeModes = [
  TimeModes.Concentrate,
  TimeModes.ShortBreak,
  TimeModes.LongBreak
];

export default function Header({ currentMode, setCurrentMode, setTime, isActive, setIsActive, setAlert }: any) {

    function handlePress(item: string) {
        if (isActive) {
          setAlert(true);
        } else {
          const newTime = item === TimeModes.Concentrate ? 25 : item === TimeModes.ShortBreak ? 5 : 15;
          setCurrentMode(item);
          setTime(newTime * 60);
          setIsActive(false);
        }
    }

    return (
      <View style={headerStyles.header}>
        {timeModes.map((item, index) => (
            <TouchableOpacity
                key={index}
                style={[headerStyles.item, currentMode !== item && {borderColor: 'transparent'}]}
                onPress={() => handlePress(item)}>
                <Text style={headerStyles.text}>{item}</Text>
            </TouchableOpacity>
        ))}
      </View>
    );
}
