import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

import HomePage from '../Screen/Home Screen/Index'
import WorkoutList from '../Screen/WorkoutList Screen/Index'

import ExerciseListPage from '../Screen/ExerciseListPage/index'

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                 name={'Home'}
                 component={HomePage}
                 options={{
                    headerShown:false,
                 }}
                />
                
                <Stack.Screen
                 name={'Beginner'}
                 component={WorkoutList}
                 options={{
                    headerShown:false,
                 }}
                />
                <Stack.Screen
                 name={'LowerBody'}
                 component={ExerciseListPage}
                 options={{
                    headerShown:false,
                 }}
                />
                
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;