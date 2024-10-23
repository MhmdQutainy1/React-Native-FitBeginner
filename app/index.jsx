import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import "../global.css"
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated ,{FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router'


const index = () => {
  const router = useRouter();
  
  return (
    <View className='flex-1 flex justify-end'>
      
      <Image className="h-full w-full absolute" source={require("../assets/images/welcome.png")}/>
      
      <LinearGradient
      colors={['transparent', '#18181b']}
      style={{width:wp(100),height:hp(70)}}
      start={{ x:0.5, y: 0 }} 
      end={{ x: 0.5, y: 0.8 }}  
      className="flex justify-end pd-12" 
    >
    
    <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center mb-1">
      <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">BEST 
      <Text className="text-red-500"> Workouts</Text>
      </Text>
      <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">For you 
      </Text>
    </Animated.View>

    <Animated.View entering={FadeInDown.delay(200).springify()} style={{margin:25,padding:15}}>
      
      <TouchableOpacity
      onPress={()=>router.push('Home')}
      style={{height:hp(7),width:wp(80), backgroundColor:"#C70039",paddingVertical: 5,paddingBottom:19,
        paddingHorizontal: 30, alignItems:"center",justifyContent:"center",
        borderRadius: 25, borderWidth:3,borderColor:"gray"}}
      >
        <Text style={{fontSize:hp(3)}} className="text-white font-bold tracking-widest">
          Get Started
        </Text>
      </TouchableOpacity>
      
    </Animated.View>

     </LinearGradient>
     <StatusBar style='light'/>

    </View>
    
  )
}
export default index

