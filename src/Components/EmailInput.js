import {View, Text} from 'react-native';
import {StyleSheet, TextInput, Animated} from 'react-native';
import React, {useRef} from 'react';

const EmailInput = () => {
  const anime = new Animated.Value(0);
  const translateY = useRef(anime);
  const handleFocus = () => {
    Animated.timing(translateY.current, {
      toValue: -19,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.cover}>
      <Animated.View
        style={[
          styles.overlayText,
          {
            transform: [{translateY: translateY.current}],
          },
        ]}>
        <Text>E-mail</Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        keyboardType="numeric"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    padding: 10,
  },
  cover: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  overlayText: {
    backgroundColor: 'white',
    height: 30,
    position: 'absolute',
    padding: 6,
  },
});

export default EmailInput;
