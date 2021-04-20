import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import HomePageTitle from '../../Component/HomePageTitle/index';
import {useNavigation} from '@react-navigation/native';
import styles from './Style';

const Index = () => {
    const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#fff'}}> 
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Good Morning</Text>
        <Text style={styles.nameText}>Anurag Sharma</Text>

        <Text style={styles.Workout}>Today Workout : Leg Day</Text>
        <Text style={styles.Day}>Day : Sunday</Text>
      </View>
      <View>
        <Pressable onPress={()=>navigation.navigate('Beginner')} style={{justifyContent: 'center', alignItems: 'center'}}>
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
    </View>
  );
};

export default Index;
