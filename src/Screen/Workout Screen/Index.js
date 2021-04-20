import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'

import Video from 'react-native-video';
import styles from './Style'

const WorkoutPage = () => {
    return (
        <View style={styles.screen}>
             {/* <Image style={styles.ExerciseContainer}
          source={require('../../../assets/Images/Lower.jpg')}
        /> */}
        <Video source={{uri: "https://youtu.be/k0rBghNcor4"}} 
       style={styles.ExerciseContainer} />   
    
        <View style={styles.nameContainer}>
            <Text style={styles.titleFont}>
            Exercise Name : - Jumping Jacks
            </Text>
            <Text style={styles.titleFont}>
            Muscle trigger  : - Glutes , Quadriceps
            </Text>
            <Text style={styles.titleFont}>
            Sets : - 3 sets (30)
            </Text>
        </View>
        <View style={styles.descriptionCotainer}>
            <Text style={styles.titleFont}>
                Description
            </Text>
            <Text style={styles.text}>
            Jumping jacks are an efficient total-body workout that you can do almost anywhere. This exercise is part of what's called plyometrics, or jump training. Plyometrics is a combination of aerobic exercise and resistance work. This type of exercise works your heart, lungs, and muscles at the same time.
            </Text>
        </View>
        </View>
    )
}

export default WorkoutPage

