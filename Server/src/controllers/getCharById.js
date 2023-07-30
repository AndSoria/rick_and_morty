const URL= "https://rickandmortyapi.com/api/character/";
const axios= require ('axios');

// con promesas
// const getCharById= (req, res)=>{

//     const {id} = req.params;

//     axios(`${URL} ${id}`)
//     .then (({data})=>{
        
//         const character={
//                         id:id,
//                         status: data.status,
//                         name: data.name,
//                         species:data.species,
//                         origin: data.origin?.name,
//                         image: data.img,
//                         gender: data.name,
//                     }

//         if(data.name){
//             res.status(200).json(character);
//         }
//         else{
            
//             return res.status(404).send('Not found');
//         }
//     })
//     .catch((error)=>{
//         return res.status(500).send(error.message);

//     })
// }

//con Asyn/await
const getCharById= async (req, res)=>{
    
    try {
        
        const {id} = req.params;
        let response= await axios(`${URL} ${id}`)
        const {data}= response.data;	

        const character={
            id:id,
            status: data.status,
            name: data.name,
            species:data.species,
            origin: data.origin?.name,
            image: data.img,
            gender: data.name,
        }

        if(data.name){
            res.status(200).json(character);
        }
        else{
            
            return res.status(404).send('Not found');
        }
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
   

}


// const axios = require('axios') ;

//  function getCharById(res, id){

//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data})=>{

//         const character={
//             id:id,
//             name: data.name,
//             gender: data.name,
//             species:data.species,
//             origin: data.origin?.name,
//             image: data.img,
//             status: data.status
//         }

//         res.writeHead(200, {'Content-type': 'application/json'})
//         res.end(JSON.stringify(character))
//     })
//     .catch(()=>{
//         res.writeHead(500, {'Content-type': 'text/plain'})
//         res.end(error=> error.res.message)
//     })



// }

module.exports= getCharById