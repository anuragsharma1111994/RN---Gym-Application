import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import styles from './Style';

import {useNavigation} from '@react-navigation/native'


const WorkoutList = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View>
        <Image
          style={{
            width: 414,
            height: 250,
            borderBottomLeftRadius: 43,
            borderBottomRightRadius: 43,
          }}
          source={require('../../../assets/Images/Body.jpg')}
        />
      </View>
      <View style={{flexDirection:'row'}}>
        <Pressable onPress={()=>{navigation.navigate('LowerBody')}} style={styles.container}>
          <View style={styles.row}>
            <View style={styles.imageView}>
              <Image
                style={{width: 98, height: 96}}
                source={require('../../../assets/Images/Lower.jpg')}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Lower Body</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.container}>
          <View style={styles.row}>
            <View style={styles.imageView}>
              <Image
                style={{width: 98, height: 96}}
                source={require('../../../assets/Images/UpperBody.jpg')}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Upper Body</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.container}>
          <View style={styles.row}>
            <View style={styles.imageView}>
              <Image
                style={{width: 98, height: 96}}
                source={require('../../../assets/Images/HILL.jpg')}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Hill Warnup</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={{flexDirection:'row'}}>
        <Pressable style={styles.container}>
          <View style={styles.row}>
            <View style={styles.imageView}>
              <Image
                style={{width: 98, height: 96}}
                source={require('../../../assets/Images/chest.jpg')}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Chest,Bicep</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.container}>
          <View style={styles.row}>
            <View style={styles.imageView}>
              <Image
                style={{width: 98, height: 96}}
                source={require('../../../assets/Images/Back.jpg')}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Back Body</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.container}>
          <View style={styles.row}>
            <View style={styles.imageView}>
              <Image
                style={{width: 98, height: 96}}
                source={require('../../../assets/Images/Leg.jpg')}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Back</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default WorkoutList;
