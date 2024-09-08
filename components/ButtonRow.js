import React from 'react';
import { View, Button, Dimensions, StyleSheet, Alert } from 'react-native';

const ButtonRow = () => {
  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = screenWidth / 2 - 20;

  const handleButtonPress = (buttonNumber) => {
    Alert.alert(`Bạn đã bấm nút ${buttonNumber}`);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: buttonWidth }}>
        <Button title="Nút số 01" onPress={() => handleButtonPress(1)} />
      </View>
      <View style={{ width: buttonWidth }}>
        <Button title="Nút số 02" onPress={() => handleButtonPress(2)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ButtonRow;
