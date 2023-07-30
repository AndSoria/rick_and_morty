import { useState } from "react";
import style from './SearchBar.module.css'
import buttonRandom from '../../assets/image/random.png';

export default function SearchBar({onSearch, random}) {

   const [id, setId ]=useState('');
   const handleChange = (event)=>{
      setId(event.target.value)
      
   };

   const handleSearch = () => {
      onSearch(id);
      setId(""); // Limpiar el valor del input
    };


    

   return (
      <div className={style.containerSearchBar}>
         <input className={style.input} type='search' onChange={handleChange} value={id} placeholder="Id character"/>
         <button className={style.addButton} onClick={handleSearch} >Add</button> 
         <button className={style.randomButton} onClick={random}>
            <img src={buttonRandom} alt="Random"/>
         </button>
      </div>
   );
}
//en el boton agregar se ejecuta la funcion handleSearch que ejecuta la funcion onSearch y luego limpiar el input