/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import Heading from '../src/components/UI/Heading';
import Layout from '../src/components/Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonPrimary, {ButtonGroup} from '../src/components/UI/Buttons';
import close from '../src/assets/Images/close.png';
import CentralModal from '../src/components/UI/Modal';
import {Lines, Pie} from '../src/components/UI/Chart';
import DateTimePicker from '@react-native-community/datetimepicker';

function Simple({navigation}) {
  const [modal, setModal] = useState();
  const [pickerModal, setPickerModal] = useState();
  const [date, setDate] = useState(new Date());
  const [inputFields, setInputFields] = useState({
    name: '',
    password: '',
  });

  const setBirthday = async val => {
    try {
      const value = JSON.stringify(val);
      const bd = await AsyncStorage.setItem('@birth_day', value);
      console.log('I am hit - bd:(', bd);
    } catch (e) {}
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setBirthday(currentDate);
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <Layout>
          <Heading style={{fontSize: 20}}>Text heading</Heading>
          <Button
            onPress={() => navigation.navigate('Gallery')}
            color="red"
            title="Click me"
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.buttonPrimary}
            onPress={() => Alert.alert('Hello')}>
            <Text
              style={{textAlign: 'center', color: '#fff', fontWeight: '800'}}>
              Click me
            </Text>
          </TouchableOpacity>

          <ButtonGroup textOne="Click" textTwo="Me"></ButtonGroup>

          <TextInput
            value={inputFields.name}
            style={styles.inputPrimary}
            onChangeText={val => setInputFields({...inputFields, name: val})}
            placeholder="Enter Name"></TextInput>
          <TextInput
            value={inputFields.password}
            style={styles.inputPrimary}
            onChangeText={val =>
              setInputFields({...inputFields, password: val})
            }
            placeholder="Enter Password"
            secureTextEntry={true}></TextInput>

          <TextInput
            multiline={true}
            style={{...styles.inputPrimary, height: 200}}
            placeholder="Enter Description"></TextInput>

          <ButtonPrimary onPress={() => setModal(!modal)}>
            Open Form Modal
          </ButtonPrimary>

          <ButtonPrimary onPress={() => setPickerModal(!pickerModal)}>
            Open Picker Modal
          </ButtonPrimary>
          <Heading style={{fontSize: 20}}>Select a date</Heading>
          <View style={{width: 300}}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="spinner"
              onChange={onChange}
            />
          </View>
          {modal && (
            <CentralModal
              isTransparent={true}
              visible={modal}
              animationType="fade">
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                <View
                  style={{
                    width: Dimensions.get('window').width - 30,
                    minHeight: 250,
                    maxHeight: 500,
                    backgroundColor: 'rgb(255, 255, 255)',
                    position: 'relative',
                    padding: 20,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <ScrollView
                    style={{
                      width: '100%',
                    }}>
                    <View style={{display: 'flex', alignItems: 'center'}}>
                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          right: 12,
                          top: 12,
                        }}
                        onPress={() => setModal(!modal)}>
                        <Image
                          style={{
                            tintColor: '#A0A0A0',
                            height: 12,
                            width: 12,
                          }}
                          source={close}></Image>
                      </TouchableOpacity>

                      <Heading style={{fontSize: 16}}>Form Detail</Heading>
                      <TextInput
                        style={styles.inputPrimary}
                        placeholder="Name"></TextInput>
                      <TextInput
                        style={styles.inputPrimary}
                        placeholder="Position"></TextInput>
                      <TextInput
                        style={styles.inputPrimary}
                        placeholder="Work Experience"></TextInput>
                      <TextInput
                        style={styles.inputPrimary}
                        placeholder="Expected CTC"></TextInput>
                      <TextInput
                        style={styles.inputPrimary}
                        placeholder="Name"></TextInput>
                      <TextInput
                        style={styles.inputPrimary}
                        placeholder="Position"></TextInput>
                      <ButtonPrimary onPress={() => setModal(!modal)}>
                        Submit
                      </ButtonPrimary>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </CentralModal>
          )}

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Lines />
            <Pie />
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: 'rgb(63,129,210)',
    width: 240,
    paddingVertical: 8,
    borderRadius: 4,
    marginVertical: 8,
  },
  inputPrimary: {
    width: 240,
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    borderColor: 'rgb(103,129,210)',
  },
});

export default Simple;
