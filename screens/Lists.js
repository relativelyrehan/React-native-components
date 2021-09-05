/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SectionList,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Heading from '../src/components/UI/Heading';
import Layout from '../src/components/Layout';
import {contacts} from '../data';
import close from '../src/assets/Images/close.png';
import CentralModal from '../src/components/UI/Modal';
import Space from '../src/components/UI/Space';
import {getUsers} from '../api/users';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
const renderItem = (item, fn) => {
  return (
    <View style={styles.contactDetails}>
      <Text style={styles.contactFonts}>{item.item.name}</Text>
      <TouchableOpacity>
        <Image style={styles.contactImage} source={{uri: item.item.uri}} />
      </TouchableOpacity>
    </View>
  );
};

function Lists() {
  const storeData = useSelector(state => state.allContacts);
  const [modal, setModal] = useState(false);
  const [expandInfo, setExpandInfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => getUsers(dispatch), [dispatch]);

  function expand(val) {
    setModal(!modal);
    setExpandInfo(val);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      {contacts?.length > 0 && (
        <Layout>
          <SectionList
            sections={contacts}
            renderItem={item => renderItem(item, expand)}
            renderSectionHeader={({section}) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />

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
                          source={close}
                        />
                      </TouchableOpacity>
                      <Heading style={{fontSize: 22}}>
                        {expandInfo.name}
                      </Heading>
                      <Space mv={4} />
                      <Image
                        source={{uri: expandInfo.uri}}
                        style={{width: 100, height: 100, borderRadius: 1000}}
                      />
                      <Space mv={10} />
                      <Text>+91 989289198</Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </CentralModal>
          )}
        </Layout>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    width: 240,
    padding: 4,
  },
  sectionHeader: {
    marginVertical: 4,
    backgroundColor: 'rgb(200,240,240)',
    width: 240,
    padding: 4,
  },
  contactDetails: {
    display: 'flex',
    width: 240,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactFonts: {
    fontSize: 14,
    fontWeight: '500',
  },
  contactImage: {
    width: 32,
    height: 32,
    borderRadius: 1000,
  },
});

export default Lists;
