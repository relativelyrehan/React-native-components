/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Javascript',
  },
  {
    id: '2',
    title: 'Java',
  },
  {
    id: '3',
    title: 'Dart',
  },
  {
    id: '4',
    title: 'Visual Basics',
  },
  {
    id: '5',
    title: 'C Sharp',
  },
  {
    id: '6',
    title: 'Kotlin',
  },
];

const Item = ({title, handleClick, setInput}) => (
  <TouchableOpacity
    onPress={() => handleClick(title, setInput)}
    style={styles.item}>
    <Text style={styles.title}>{title} </Text>
  </TouchableOpacity>
);

const MultiSelect = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');

  const handleDelete = val => {
    const find = selectedItems.indexOf(val);
    const newArray = selectedItems;
    newArray.splice(find, 1);
    setSelectedItems([...newArray]);
    return;
  };

  const handleClick = (val, fn) => {
    if (selectedItems.indexOf(val) !== -1) {
      return;
    } else {
      setSelectedItems([...selectedItems, val]);
      fn('');
    }
  };

  const renderItem = ({item}) => (
    <Item title={item.title} handleClick={handleClick} setInput={setInput} />
  );

  return (
    <SafeAreaView>
      <View
        style={{
          width: 240,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {selectedItems.map((val, key) => (
          <TouchableOpacity
            activeOpacity={0.5}
            key={key}
            onPress={() => {
              handleDelete(val);
            }}>
            <Text style={styles.inputValue}>
              {val} {'  x'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputView}>
        <TouchableOpacity
          onPress={() => setSelectedItems([])}
          style={{
            position: 'absolute',
            right: 8,
            zIndex: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>x</Text>
        </TouchableOpacity>
        <TextInput
          style={{height: 20, width: 200}}
          placeholder={'Start Typing'}
          value={input}
          onChangeText={val => {
            setShow(true);
            setInput(val);
          }}
          onPressOut={() => setShow(false)}
          onBlur={() => setShow(false)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && input === '') {
              setShow(false);
              setSelectedItems(
                selectedItems.slice(0, selectedItems.length - 1),
              );
            }
          }}
        />
      </View>
      {show && (
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#5b010010',
    marginTop: StatusBar.currentHeight || 0,
  },
  inputView: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#000bbb',
    height: 40,
    width: 240,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#fff',
    position: 'relative',
    marginVertical: 8,
  },
  inputValue: {
    fontWeight: '700',
    fontSize: 14,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#3DB2FF',
    padding: 4,
    marginBottom: 4,
    borderRadius: 4,
  },
  item: {
    padding: 4,
    borderRadius: 4,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: 'rgb(46,73,137)',
    fontWeight: '800',
  },
});

export default MultiSelect;
