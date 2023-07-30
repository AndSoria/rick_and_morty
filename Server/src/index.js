const server= require('./app')

const PORT=3001;

server.listen(PORT,()=>{
  console.log('Server raised in port: ' + PORT);
});















// const http = require ("http");
// const getCharById= require("./controllers/getCharById");

// http.createServer((req, res)=>{

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const {url}= req;
//     const arrayUrl=url.split("/")
//     const id= Number(arrayUrl[arrayUrl.length-1]);

//     if(url.includes('/rickandmorty/character')){

//       getCharById(res, id);
//     }

//    //  if(url.includes('/rickandmorty/character')){

//    //   const arrayUrl= url.split("/");
//    //   const id= Number(arrayUrl[arrayUrl.length-1]);   
     
//    //   const character= data.find((char)=>char.id ===id);

//    //   if(character){
//    //      res.writeHead(200, {'Content-type': 'application/json'})

//    //      res.end(JSON.stringify(character));
//    //   }
//    //   else{
//    //      res.writeHead(400, {'Content-type' : "application/json"})
//    //      res.end(JSON.stringify({error: "Character not found"}))
//    //   }

//    //  }

// }).listen(3001, 'localhost');