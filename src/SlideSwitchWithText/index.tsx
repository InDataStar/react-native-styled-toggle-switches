import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import React, { useState } from 'react';

/* 
  before,after color
  duration
  return t/F
  set width/height
*/

interface slideSwitchProps {
  beforeColor: string;
  afterColor: string;
  afterText: string;
  beforeText: string;
  duration: number;
  width: number;
  height: number;
  onToggle?: (value: boolean) => void;
}

const SlideSwitchWithText: React.FC<slideSwitchProps> = ({
  beforeColor,
  afterColor,
  duration,
  width,
  height,
  onToggle,
  beforeText,
  afterText
}) => { 
  const maxTranslateX = width - 2 - height;
  const styles = StyleSheet.create({
    track: {
      alignItems: 'flex-start',
      width: width,
      height: height,
      padding: 5,
      borderRadius: height / 2,
      borderColor: beforeColor,
      borderWidth: 1,
      flexDirection: 'row',
    },
    labelContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
    },

    labelLeft: {
      flex: 1,
      textAlign: 'left',
      color: afterColor, // or any color that works with your background
      fontWeight: 'bold',
    },

    labelRight: {
      flex: 1,
      textAlign: 'right',
      color:  beforeColor,
      fontWeight: 'bold',
    },
    thumb: {
      height: '100%',
      aspectRatio: 1,
      backgroundColor: afterColor,
      borderRadius: height / 2,
    },
  });

  const [checked, setChecked] = useState(false);
  const trackAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      checked ? 1 : 0,
      [0, 1],
      [afterColor, beforeColor]
    );

    return {
      backgroundColor: withTiming(backgroundColor, { duration }),
    };
  });
  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      checked ? 1 : 0,
      [0, 1],
      [0, maxTranslateX] // Adjust according to your design
    );
    const color = interpolateColor(
      checked ? 1 : 0,
      [0, 1],
      [beforeColor, afterColor]
    );

    return {
      transform: [{ translateX: withTiming(translateX, { duration }) }],
      backgroundColor: color,
    };
  });

  const toggleSwitch = () => {
    setChecked((prev) => {
      const newValue = !prev;
      if (onToggle) {
        onToggle(newValue); // send new state to parent
      }
      return newValue;
    });
  };
  return (
    <>
      <TouchableOpacity testID="Switchtest" onPress={toggleSwitch}>
  <Animated.View style={[styles.track, trackAnimatedStyle]}>
    {/* Text Container */}
    <Animated.View style={styles.labelContainer}>
      {!checked ? (
        <Text style={styles.labelRight}>{afterText}</Text>
      ) : (
        <Text style={styles.labelLeft}>{beforeText}</Text>
      )}
    </Animated.View>

    {/* Thumb */}
    <Animated.View style={[styles.thumb, thumbAnimatedStyle]} />
  </Animated.View>
      </TouchableOpacity>
    </>
  );
};

export default SlideSwitchWithText;
