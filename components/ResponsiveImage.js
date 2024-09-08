import React from 'react';
import { Image, Dimensions, StyleSheet, View } from 'react-native';

const ResponsiveImage = ({ orientation }) => {
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = orientation === 'landscape' ? screenWidth * 0.5 : screenWidth * 0.8;
  const imageHeight = orientation === 'landscape' ? imageWidth * 0.4 : imageWidth * 0.5;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-3-2.jpg' }}
        style={{ width: imageWidth, height: imageHeight }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 0,
  },
});

export default ResponsiveImage;
