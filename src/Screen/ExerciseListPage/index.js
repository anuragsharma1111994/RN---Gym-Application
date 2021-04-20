import React from 'react'
import { Text, View,FlatList,Image,Pressable, ScrollView} from 'react-native'

import styles from './style'
import lowerBody from '../../../assets/Data/LowerBody'


const ExerciseListPage = () => {
    return (
        <View >
            <ScrollView>
            <View>
            <Image
          style={{
            width: 414,
            height: 250,
            borderBottomLeftRadius: 43,
            borderBottomRightRadius: 43,
          }}
          source={require('../../../assets/Images/Lower.jpg')}
        />
            
            </View>
            <FlatList 
             data={lowerBody}
             renderItem={({item})=>(
                
                 <Pressable>
                     <View style={styles.container}>
                     <Text>
                     {item.title}   
                     </Text>
                     </View>
                 </Pressable>
               
             )}
            />
            </ScrollView>
        </View>
    )
}

export default ExerciseListPage

