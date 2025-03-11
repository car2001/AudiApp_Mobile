import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Platform } from 'react-native';

import { View, TextInput } from './Themed';

const CustomDateTimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    return (
      <View>
        <TextInput
          value={date.toLocaleString()}
          placeholder="Selecciona fecha y hora"
          onFocus={() => setShow(true)}
        />
        {show && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={onChange}
          />
        )}
        <Button title="Confirmar" onPress={() => {/* Lógica para confirmar la fecha y hora */}} />
      </View>
    );
  };
  

export default CustomDateTimePicker;