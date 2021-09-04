/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ButtonPrimary from '../src/components/UI/Buttons';
import Layout from '../src/components/Layout';
import Heading from '../src/components/UI/Heading';
import MultiSelect from '../src/components/UI/MultiSelect';
import Space from '../src/components/UI/Space';
function Medium() {
  const [val, setVal] = useState([]);
  const pickImage = () => {
    launchImageLibrary(
      {
        title: 'You can choose one image',
        mediaType: 'photo',
        selectionLimit: 1,
      },
      res => {
        if (res.didCancel) {
          return;
        } else {
          console.log('I am asset -->>', res.assets);
          setVal([...val, res.assets[0]]);
        }
      },
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Layout>
        <MultiSelect />
        <Space mv={16} />
        <ScrollView>
          <View style={styles.uploadContainer}>
            {val?.length > 0 ? (
              val.map((image, key) => {
                return (
                  <Image
                    key={key}
                    source={{
                      uri: image.uri,
                    }}
                    style={{
                      ...styles.imageUpload,
                      width: 250 / val.length,
                      height: 200 / val.length,
                    }}
                  />
                );
              })
            ) : (
              <Heading>Upload Image</Heading>
            )}
            <ButtonPrimary onPress={pickImage}>Upload</ButtonPrimary>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
    position: 'relative',
    backgroundColor: 'rgba(102, 50, 30, 0.2)',
    width: 280,
    minHeight: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  imageUpload: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Medium;
