import React from 'react';
import { useWindowDimensions, Button, View, StyleSheet } from 'react-native';

const DynamicButtons = () => {
  const { width } = useWindowDimensions();
  const buttonWidth = width / 2 - 20;

  return (
    <View style={styles.container}>
      <Button title="Nút số  1" style={{ width: buttonWidth }} />
      <Button title="Nút số  2" style={{ width: buttonWidth }} />
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

export default DynamicButtons;
