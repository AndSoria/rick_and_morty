export const ADD_FAV= "ADD_FAV";
export const REMOVE_FAV= "REMOVE_FAV";
export const FILTER= "FILTER";
export const ORDER= "ORDER";
export const ALLCHARACTERS="ALLCHARACTERS";
import axios from "axios";
export const addFav=  (character)=>{

      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async(dispatch) => {
         try {
            const response= await axios.post(endpoint, character)
            const {data} = response.data;

            return dispatch({
               type:'ADD_FAV',
               payload: data
            })

         } catch (error) {

            console.log(error);
            
         }
      

   }


}


   // const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: 'ADD_FAV',
   //           payload: data,
   //        });
   //     });
   //  };

   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: 'ADD_FAV',
   //           payload: data,
   //        });
   //     });
   //  };
 
    
    // return{
    //     type: ADD_FAV,
    //     payload: character
    // };


export  const removeFav=(id)=>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

         return async(dispatch) => {
            try {
               const response= await axios.delete(endpoint)
               const {data}= response.data
               return dispatch ({
               type: 'REMOVE_FAV',
               payload : data
               })
               
            } catch (error) {
               console.log(error);
            }
         
         }
      


   //  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   //  return (dispatch) => {
   //     axios.delete(endpoint).then(({ data }) => {
   //        return dispatch({
   //           type: 'REMOVE_FAV',
   //           payload: data,
   //     });
   //     });
   //  };
    


    
    // return {
    //     type: REMOVE_FAV,
    //     payload: id
    // }
 }
 
 export const filterCards =(gender)=>{
    return {
        type: FILTER,
        payload : gender
    }
 }

 export const orderCards =(orden)=>{ //A: ascendente , D: descendente
    return {
        type: ORDER,
        payload : orden
    }
 }

 export const viewAllChar=()=>{
    return{
        type: ALLCHARACTERS,
    }
 }