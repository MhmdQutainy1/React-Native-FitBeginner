import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex" edges={["top"]} >
        <StatusBar style='dark'/>
        <View className="flex-row justify-between items-center mx-5 mt-12 ">
            <View className="mt-9">
                <Text style={{fontSize:hp(4.5)}}
                 className="font-bold tracking-wider text-neutral-500">
                  READY TO
                 </Text>
                <Text style={{fontSize:hp(4.5)}} 
                className="font-bold tracking-wider text-rose-500">
                    WORKOUT
                </Text>
                
            </View>
            <View className="flex justify-center items-center mt-6">
                <Image source={require('../assets/images/avatar.png')}
                style={{height:hp(7),width:wp(14)}}
                className="rounded-full"/>
            
                <View style={{height:hp(5),width:wp(10)}}
                 className="bg-neutral-200 flex rounded-full justify-center items-center mt-3">
                <Ionicons name="notifications" size={hp(3)} color="black"/>

                </View>
                
                </View>
        </View>
            {/*Slider Image */}   
            <View className="mt-3">
                <ImageSlider/>
                
            </View> 

           {/*body part list*/}
           <View className="flex-1 ">
            <BodyParts/>
           </View>

    </SafeAreaView>
  )
}

export default Home