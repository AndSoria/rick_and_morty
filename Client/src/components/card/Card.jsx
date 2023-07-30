import style from './Card.module.css'
import {Link} from 'react-router-dom'
import { addFav, removeFav } from '../../redux/action';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';





 function Card(props) {

   const{
      id, 
      name, 
      image, 
      onClose,
      removeFav,
      addFav,
      myFavorites,
      allCharacters

                   } =props
   
    const [isFav, setIsFav]= useState(false);

    const {pathname}= useLocation();

   const handleFavorite= ()=>{
      
 // si Fav es:       true              false
      isFav ? removeFav(id): addFav(props);
   //seteo caso contrario de isFav   
      setIsFav(!isFav);
   };


   
   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [allCharacters]);

   return (
      <div className={style.container}>
         

         <div className={style.positionImg}>  
            <img  src={image} alt={name} /> 
            <Link to={`/detail/${id}`}>
               <h2 className={style.name}>{name}</h2> 
            </Link>
            {pathname === '/home' && <button className={style.btn} onClick={()=>{onClose(id)}}>X</button>}
         </div>

         <div className={style.data} > 
            <div className={style.btnFavorites}>
               {
                  isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                  ) : (
                        <button onClick={handleFavorite}>🤍</button>
                        )
               }
            </div>  
         
            <div className={style.data2}>
               <h2>Id: </h2>
            </div>

            <div className={style.data3} >
               <h2>{id} </h2>
            </div>

         </div> 
         
      </div>
   );
}

const mapStateToProps= (state)=>
{
   return {
      allCharacters: state.allCharacters
   }
}
const mapDispatchToProps =(dispatch) => 
{
   return{
      addFav: (character)=>{
         dispatch(addFav(character));
      },
      removeFav: (id)=>{
         dispatch(removeFav(id))
      }
   }
}



export default connect(mapStateToProps,mapDispatchToProps)(Card);
// usando destructurin
// export default function Card({id, name,status, species, gender, origin, image, onClose}) {
//    return (
//       <div>
//          <button onClick={onClose}>X</button>
//          <h2>Id: {id}</h2>
//          <h2>Nombre: {name}</h2>
//          <h2>Status: {status}</h2>
//          <h2>Specie: {species}</h2>
//          <h2>Gender: {gender}</h2>
//          <h2>Origin: {origin}</h2>
//          <img src={image} alt={name} /> 
//       </div>
//    );
// }


      // <div className={style.data} >   
      // <div className={style.data2}>
      //    <h2>Id: </h2>
      //    {/* <h2>Nombre: </h2> */}
      //    <h2>Status: </h2>
      //    <h2>Specie: </h2>
      //    <h2>Gender: </h2>
      //    <h2>Origin: </h2>
      // </div>

      // <div className={style.data3} >
      //    <h2>{props.id} </h2>
         
      //    <h2>{props.status}</h2>
      //    <h2>{props.species}</h2>
      //    <h2>{props.gender}</h2>
      //    <h2>{props.origin}</h2>
      // </div>
      // </div> 
