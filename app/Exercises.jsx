import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExerciseByBodyPart } from '../api/ExerciseDb';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import { dummyExercises } from '../constants';
import ExercisesList from '../components/ExercisesList';
import { ScrollView } from 'react-native-virtualized-view';


const Exercises = () => {
    const [exercises , setExersises]= useState([]);
    const router = useRouter();
    const item = useLocalSearchParams();
    //console.log("got item: :", item);

    useEffect(()=>{
      if(item) getExercises(item.name);
    },[item]);
 
    const getExercises= async (bodyPart)=>{
    let data = await fetchExerciseByBodyPart(bodyPart);
   // console.log("Got Data :", data);
    setExersises(data);
    } 
  {/** RETURN */}
  return (
    <ScrollView style="light">
      <Image
      source={item.image}
      style={{width:wp(100), height:hp(45)}}
      className="rounded-b-[40px]"
      />
      <TouchableOpacity 
      onPress={()=>router.back()} 
      style={{height : hp (5.5) , paddingRight:3, width : wp(11),marginTop:30,
       backgroundColor:"#D70040", marginHorizontal:8,position:"absolute",marginLeft:15,borderRadius:26,justifyContent:"center",alignItems:"center"}}>

      <Ionicons name="caret-back-outline" size={hp(5)} color="white"/>

      </TouchableOpacity>
      {/** Exercises from Api */}
      <View>
        <Text className="text-neutral-700 mx-4 my-4 font-semibold" style={{fontSize: hp(2.6)}}>
          {item.name} exercises
        </Text>
        <View className="mb-10 mx-5">
         <ExercisesList data={exercises}/> 
      
        </View>
      </View>
      
    </ScrollView>
  )
}

export default Exercises

