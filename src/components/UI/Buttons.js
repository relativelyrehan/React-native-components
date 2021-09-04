/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

function ButtonPrimary({onPress, children}) {
  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
      <Text style={{textAlign: 'center', color: '#fff', fontWeight: '800'}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export const ButtonGroup = ({textOne, textTwo}) => {
  const [isActive, setActive] = useState('');
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity
        onPress={() => setActive(textOne)}
        style={{
          width: '50%',
          borderRadius: 4,
          padding: 6,
          borderRightWidth: 1,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: isActive === textOne ? '#F0E5CF' : '#FFF',
        }}>
        <Text style={{textAlign: 'center', fontWeight: '600'}}>{textOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(textTwo)}
        style={{
          width: '50%',
          borderRadius: 4,
          padding: 6,
          backgroundColor: isActive === textTwo ? '#F0E5CF' : '#FFF',
        }}>
        <Text style={{textAlign: 'center', fontWeight: '600'}}>{textTwo}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: 'rgb(63,129,210)',
    width: 240,
    paddingVertical: 8,
    borderRadius: 4,
    marginVertical: 8,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 240,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 8,
  },
});

export default ButtonPrimary;
