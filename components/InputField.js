import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Platform, StyleSheet, Alert } from 'react-native';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputSubmit = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== '') {
      Alert.alert('Thông báo', `Bình đã nhập: ${trimmedValue}`);
      setInputValue('');
    } else {
      Alert.alert('Thông báo', 'Bình vui lòng hãy nhập giá trị!');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Nhập vào đây nè..."
        onChangeText={setInputValue}
        value={inputValue}
        onSubmitEditing={handleInputSubmit}
        returnKeyType="done"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 20,
  },
});

export default InputField;
