/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Layout from '../src/components/Layout';
import Heading from '../src/components/UI/Heading';
import Space from '../src/components/UI/Space';
import Video from 'react-native-video';
import app from '../src/assets/Images/apps.mp4';

import {data} from '../data/index';

function Complex() {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image style={styles.imgbanner} source={{uri: item.img}} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <Layout>
          <Heading>Carousels</Heading>
          <Carousel
            data={data}
            layout="stack"
            renderItem={renderItem}
            sliderWidth={350}
            itemWidth={300}
          />
          <Space mv={8} />
          <Carousel
            data={data}
            layout="tinder"
            renderItem={renderItem}
            sliderWidth={350}
            itemWidth={300}
          />
          <Space mv={8} />
          <Carousel
            data={data}
            layout="default"
            renderItem={renderItem}
            sliderWidth={350}
            itemWidth={300}
          />
          <Space mv={8} />
          <Heading>Video</Heading>
          <View style={styles.videoContainer}>
            <Video source={app} controls={true} style={styles.videoContainer} />
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgbanner: {
    height: 160,
    width: 300,
    borderRadius: 12,
  },
  videoContainer: {
    width: 300,
    height: 175,
    borderRadius: 4,
  },
});

export default Complex;
