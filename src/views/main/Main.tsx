import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Timer from '../../components/timer/Timer';
import { TimeModes } from '../../constants/TimeModes';
import { BackgroundColors } from '../../constants/BackgroundColors';
import { Audio } from 'expo-av';
import { mainStyles } from './MainStyles';
import Alert from '../../components/alert/Alert';

export default function Main() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentMode, setCurrentMode] = useState(
    TimeModes.Concentrate || TimeModes.ShortBreak || TimeModes.LongBreak
  );
  const [isActive, setIsActive] = useState(false);
  const [alert, setAlert] = useState(false);

  // Hook for timer
  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (time === 0) {
      playSounds();
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(currentMode === TimeModes.Concentrate ? 1500 : currentMode === TimeModes.ShortBreak ? 300 : 900);
    }
    return () => {clearInterval(interval)}
  }, [isActive, time]);

  // Hook for alert
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [alert]);

  function handleStartStop() {
    if (!isActive) {
      playSounds();
    }
    if (alert) {
      setAlert(false);
    }
    setIsActive(!isActive);
  }

  async function playSounds() {
    if (!isActive) {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/sounds/start.mp3')
      );
      await sound.playAsync();
    } else {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/sounds/finish.mp3')
      );
      await sound.playAsync();
    }
  }

  function setBackgroundColor(currentMode: string): string {
    if (!alert) {
        switch (currentMode) {
          case TimeModes.Concentrate:
            return BackgroundColors.Yellow;
          case TimeModes.ShortBreak:
            return BackgroundColors.Green;
          case TimeModes.LongBreak:
            return BackgroundColors.Purple;
          default:
            // Shows if something is wrong
            return 'black';
        }
    } else {
        return BackgroundColors.Orange;
    }
  }

  return (
    // SafeAreaView is for iOS to put elements in a proper position relative to borders
    <SafeAreaView style={[mainStyles.container, {backgroundColor: setBackgroundColor(currentMode)}]}>
      <StatusBar style='auto' />
      <View style={mainStyles.view}>
        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Pomodoro</Text>
          <Text style={mainStyles.titleIcons}>🍅⏲️</Text>
        </View>
        <Header
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          setTime={setTime}
          isActive={isActive}
          setIsActive={setIsActive}
          setAlert={setAlert} />
        <Timer time={time}/>
        <TouchableOpacity
          style={mainStyles.button}
          onPress={() => handleStartStop()}>
          <Text style={mainStyles.buttonText}>
            {isActive ? '⏸️ PAUSE' : '🏁 START'}
          </Text>
        </TouchableOpacity>
        <View style={mainStyles.alertContainer}>
           {alert && <Alert />}
        </View>
      </View>
    </SafeAreaView>
  );
}