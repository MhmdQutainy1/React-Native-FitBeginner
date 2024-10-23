import { View, TouchableOpacity, ScrollView, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';



const ExercisesDetails = () => {
    const item = useLocalSearchParams();
    //console.log("got item: :", item);
    const router = useRouter();
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
                    <Image 
                    source={{uri:item.gifUrl}}
                    contentFit='cover'
                    style={{width:wp(100), height:wp(100)}}
                    className="rounded-b-[40px]"   
                    />
      </View>
      <TouchableOpacity 
      onPress={()=>router.back()} 
      style={{height : hp (5.5) , paddingRight:3, width : wp(11),marginTop:30,
       backgroundColor:"white", marginHorizontal:8,position:"absolute",marginLeft:15,borderRadius:26,justifyContent:"center",alignItems:"center"}}>

      <Anticons name="closecircle" size={hp(5)} color="#f43f5e"/>

      </TouchableOpacity>
      {/* Details */}
      <ScrollView className="mx-2 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
        <Text style={{fontSize:hp(3.5)}}
        className=" font-semibold text-neutral-500 tracking-wide "
        >
            {
            item.name
            }

        </Text>
        <Text style={{fontSize:hp(2)}}
        className="text-neutral-700 tracking-wide "
        >
            Equipment
            <Text className="font-bold text-neutral-800">
                {item?.equipment}

            </Text>
        </Text>
        <Text style={{fontSize:hp(2)}}
        className="text-neutral-700 tracking-wide "
        >
            Secondry Muscles
            <Text className="font-bold text-neutral-800">
                {item?.secondryMuscles}

            </Text>
        </Text>
        <Text style={{fontSize:hp(2)}}
        className="text-neutral-700 tracking-wide "
        >
            Target
            <Text className="font-bold text-neutral-800">
                {item?.target}

            </Text>
        </Text>
        <Text style={{fontSize:hp(3)}}
        className=" font-semibold text-neutral-500 tracking-wide "
        >
            Instructions
        </Text>
        <Text>
            {
                item.instructions.split(',').map((instructions,index)=>{
                    return(
                        <Text 
                        key={instructions}
                        style={{fontSize:hp(1.7)}}
                        className="text-neutral-800"
                        >
                            {instructions}
                        </Text>
                    )
                       })
            }
        </Text>
      </ScrollView>

    </View>
  )
}

export default ExercisesDetails