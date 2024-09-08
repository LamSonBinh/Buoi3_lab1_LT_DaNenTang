import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Alert } from 'react-native';

const ResponsiveButtons = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  function getOrientation() {
    const { height, width } = Dimensions.get('window');
    return height > width ? 'portrait' : 'landscape';
  }

  useEffect(() => {
    const handleOrientationChange = () => {
      const { height, width } = Dimensions.get('window');
      const newOrientation = height > width ? 'portrait' : 'landscape';
      console.log(`Orientation changed to: ${newOrientation}`);
      setOrientation(newOrientation);
    };

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  const handleButtonPress = (buttonNumber) => {
    Alert.alert(`Bạn đã bấm nút ${buttonNumber}`);
  };

  return (
    <View style={orientation === 'portrait' ? styles.portrait : styles.landscape}>
      <TouchableOpacity
        style={orientation === 'landscape' ? [styles.button, styles.landscapeButton] : styles.button}
        onPress={() => handleButtonPress(1)}
      >
        <Text style={orientation === 'landscape' ? [styles.buttonText, styles.landscapeButtonText] : styles.buttonText}>
          Nút số 01
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={orientation === 'landscape' ? [styles.button, styles.landscapeButton] : styles.button}
        onPress={() => handleButtonPress(2)}
      >
        <Text style={orientation === 'landscape' ? [styles.buttonText, styles.landscapeButtonText] : styles.buttonText}>
          Nút số 02
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  portrait: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  landscape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 100,
  },
  landscapeButton: {
    padding: 15, 
    marginBottom: 10, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  landscapeButtonText: {
    fontSize: 16, 
  },
});

export default ResponsiveButtons;
