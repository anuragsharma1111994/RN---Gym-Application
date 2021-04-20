import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const HomePageTitle = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Beginner</Text>
            <Image
              style={{width: 112, height: 110}}
              source={require('../../../assets/Images/Beginner.jpg')}
            />
          </View>
        </View>
      </Pressable>
      <Pressable style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Intermediate</Text>
            <Image
              style={{width: 112, height: 110}}
              source={require('../../../assets/Images/Intermidate.jpg')}
            />
          </View>
        </View>
      </Pressable>
      <Pressable style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Advance</Text>
            <Image
              style={{width: 112, height: 110}}
              source={require('../../../assets/Images/Advance.jpg')}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default HomePageTitle;
