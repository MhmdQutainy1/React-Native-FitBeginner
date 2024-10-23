import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated ,{FadeInDown } from 'react-native-reanimated';


export default function BodyParts() {
    const router = useRouter();
  return (
    <View className="mx-3 my-3">
      <Text style={{fontSize:hp(3.5)}} className="font-semibold text-neutral-700">
        Exercises
        </Text>

        <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50,paddingTop:20}}
        columnWrapperStyle={{
            justifyContent:"space-between"
        }}
        renderItem={({item,index})=><BodyPartCard router={router} index={index} item={item}/>}
        
        />
        
    </View>
  )
}

const BodyPartCard= ({item,router,index})=>{
    return(
      <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
        <TouchableOpacity 
        onPress={()=>router.push({pathname:"/Exercises",params:item})}
        style={{height:hp(25),width:wp(42), flex:1,justifyContent:"flex-end",padding:4 , margin:8}}
        >
            <Image source={item.image}
            style={{ resizeMode:"cover" ,height:hp(25),width:wp(42)}}
            className="rounded-[35px] absolute"
            />
            <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.9)']}
      style={{width:wp(42),height:hp(15)}}
      start={{ x:0.5, y: 0 }} 
      end={{ x: 0.5, y: 1 }}  
      className="absolute bottom-0 rounded-b-[35px]" 
    />
    <Text style={{fontSize:hp(2.3) , letterSpacing:1.2}} className="text-white font-semibold text-center">
        {item.name}
    </Text>
    
        </TouchableOpacity>
        </Animated.View>
    )

}