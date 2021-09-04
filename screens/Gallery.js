import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CentralModal from '../src/components/UI/Modal';
import Swiper from '../src/components/UI/Swiper';
import FastImage from 'react-native-fast-image';
import Heading from '../src/components/UI/Heading';
import Space from '../src/components/UI/Space';

const Gallery = () => {
  const [swiperData, setSwiperData] = useState([]);
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(120)).map((v, i) => {
      return {
        id: i,
        uri: 'https://unsplash.it/400/400?image=' + (i + 1),
        dimensions: {width: 1080, height: 1920},
      };
    });
    setDataSource(items);
  }, []);

  const showModalFunction = (visible, item) => {
    const index = dataSource.indexOf(item);
    const newArray = dataSource.slice(index);
    setSwiperData(newArray);
    setModalVisibleStatus(visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Space mv={12} />
      <Heading>Gallery</Heading>
      <Space mv={12} />
      {modalVisibleStatus ? (
        <CentralModal
          isTransparent={false}
          animationType={'slide'}
          visible={modalVisibleStatus}
          onRequestClose={() => {
            showModalFunction(!modalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            {/* <FastImage
              style={styles.fullImageStyle}
              source={{uri: imageuri}}
              resizeMode={FastImage.resizeMode.contain}
            /> */}
            <Swiper images={swiperData} />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus);
              }}>
              <Text style={{fontWeight: '800', color: '#FFF'}}>Back</Text>
            </TouchableOpacity>
          </View>
        </CentralModal>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={dataSource}
            renderItem={({item}) => (
              <View style={styles.imageContainerStyle}>
                <TouchableOpacity
                  key={item.id}
                  style={{flex: 1}}
                  onPress={() => {
                    console.log('Here lies the item', item);
                    showModalFunction(true, item);
                  }}>
                  <FastImage
                    style={styles.imageStyle}
                    source={{
                      uri: item.uri,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0)',
  },
  closeButtonStyle: {
    width: 40,
    height: 25,
    top: 50,
    left: 20,
    position: 'absolute',
  },
});
