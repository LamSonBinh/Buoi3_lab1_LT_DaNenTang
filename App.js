import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, Platform, StyleSheet, View, StatusBar, useWindowDimensions } from 'react-native';
import ButtonRow from './components/ButtonRow';
import DynamicButtons from './components/DynamicButtons';
import ResponsiveImage from './components/ResponsiveImage';
import ResponsiveButtons from './components/ResponsiveButtons';
import InputField from './components/InputField';
import CustomStatusBar from './components/CustomStatusBar';

const App = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const handleOrientationChange = ({ window }) => {
      const { height, width } = window;
      setOrientation(height > width ? 'portrait' : 'landscape');
    };

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <View style={styles.contentContainer}>
          <ResponsiveImage orientation={orientation} />
          <InputField />
          <ResponsiveButtons />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
