import React from 'react';
import { Text, StyleSheet, View, StyleProp, TextStyle } from 'react-native';

type LabelProps = {
  label: string;
  required?: boolean;
  style? : StyleProp<TextStyle>
};

const Label = ({ label, required, style }: LabelProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, style]}>
        {label}:
        {required && <Text style={styles.required}> *</Text>}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight:"400"
  },
  required: {
    color: '#f35369',
  },
});

export default Label;
