import './App.css';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';


import axios from 'axios';

import Cards from './components/cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Error404 from './components/Error404/Error404'



function App() {
  const { pathname }= useLocation()
  const navigate=useNavigate()

   const [characters, setCharacters]=useState([])
   const [access, setAccess]= useState(false)

   const EMAIL='rick@mail.com'
   const PASSWORD='pass123'

   function login({email, password}){
      if(email===EMAIL &&  password===PASSWORD)
      {
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access, navigate])

   const onSearch= (id)=> {
      if(!id) alert ('Enter an ID')
      if(characters.find(char => char.id ===parseInt(id))){
         alert(`The character with id ${id} already exists on the screen`)
         return;
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         
         }
      })
      .catch(err => alert(err.response.data.error))
   }

   const random = ()=>{
      let randomId= Math.floor(Math.random() * 826);
      console.log(randomId);
      onSearch(randomId);
   }

   
   //   function onSearch(id) {
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.json())
//     .then(( data ) => {
//        if (data.name) {
   //           setCharacters((oldChars) => [...oldChars, data]);
//        } else {
//           alert('¡No hay personajes con este ID!');
//        }
//     });
//  }

const onClose = (id)=>{
   
   setCharacters(characters.filter(char => char.id !== id))
}

const logout= ()=>{
   setAccess(false);
}

return (
      
      <div className='App'>
            
        
         {pathname !== '/' && <NavBar onSearch={onSearch} random={random} logout={logout}/> }
         

         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path= "/home" element={<Cards className='contenedorCards' characters={characters} onClose={onClose}/>} />
            <Route path= "/about" element={<About />}/>
            <Route path= "/detail/:id" element={<Detail />}/>
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='*' element={<Error404 />} />
         </Routes>
            
               
      </div>
   );
}

export default App;

 