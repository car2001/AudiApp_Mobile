import React, { Children } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, StyleProp, TextStyle } from 'react-native';
import MainStyles from '../styles/styles';

type Props = {
  text: string;
  onPress: () => void;
  isLoading: boolean;
  styleButton?: StyleProp<TextStyle>;
  styleButtonText?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export default function CustomButton({ text, onPress, isLoading, styleButton, styleButtonText, children }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button,styleButton]}
      disabled={isLoading}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.button, styleButtonText]}>
          <Text> {children} </Text>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{}
})
