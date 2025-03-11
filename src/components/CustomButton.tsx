import React, { Children } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, StyleProp, TextStyle } from 'react-native';

type CustomButtonProps = {
  text: string;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  styleButton?: StyleProp<TextStyle>;
  styleButtonText?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export default function CustomButton({ 
  text, 
  onPress, 
  isLoading, 
  styleButton, 
  styleButtonText, 
  children, 
  disabled 
}: CustomButtonProps) {
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styleButton,
        (isLoading || disabled) && { opacity: 0.6 }
      ]}
      disabled={isLoading || disabled}
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
