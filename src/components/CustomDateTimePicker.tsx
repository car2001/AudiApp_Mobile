import { useState } from 'react';
import { Platform } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

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
          <View style={{width: "10%", height: "50%"}}>
            <DatePicker
              options={{
                backgroundColor: '#090C08',
                textHeaderColor: '#FFA25B',
                padding: 0,
                textDefaultColor: '#F6E7C1',
                selectedTextColor: '#fff',
                mainColor: '#F4722B',
                textSecondaryColor: '#D6C7A1',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              
              style={{borderRadius: 10}}
              mode="monthYear"
              selectorStartingYear={2000}
              onMonthYearChange={selectedDate => setDate(selectedDate)}
            />
          </View>
        )}
      </View>
    );
  };
  

export default CustomDateTimePicker;