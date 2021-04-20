import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    ExerciseContainer:{
        width: Dimensions.get('window').width,
        height: 250,
        marginTop:30,
        borderRadius:30
      },
    screen:{
        height:Dimensions.get('screen').height,
        backgroundColor:'black'
    },
    titleFont:{
        color:'#fff',
        fontWeight:'bold',
        margin:8
    },
    text:{
        color:"#fff"
    },
    nameContainer:{
        margin:20
    },
    descriptionCotainer:{
        alignItems:'center',
    
    }

})

export default styles