import axios from "axios";
import { rapaidApiKey } from "../constants";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url , params)=>{
    try{
        const options={
            method:'GET',
            url, 
            params,
            headers:{
                'x-rapidapi-Key':rapaidApiKey,
                'x-rapidapi-Host':'https://exercisedb.p.rapidapi.com',
            }

        };
        const response = await axios.request(options)
        return response.data;

    }catch(err){
        console.log("ERROR :",err.message)
    }
}
export const fetchExerciseByBodyPart= async (bodyPart)=>{
    let data = apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;

}