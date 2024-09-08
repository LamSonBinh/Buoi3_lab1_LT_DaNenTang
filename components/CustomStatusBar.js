import React from 'react';
import { StatusBar, Platform } from 'react-native';

const CustomStatusBar = () => {
  return (
    <StatusBar
      barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      backgroundColor={Platform.OS === 'android' ? 'green' : 'transparent'}
    />
  );
};

export default CustomStatusBar;
