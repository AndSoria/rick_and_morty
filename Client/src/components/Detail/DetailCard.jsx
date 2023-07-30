import style from './Detail.module.css';

export default function Card(props) {
   return (
      <div className={style.container}>

         <div className={style.positionImg}>  
            <img  src={props.image} alt={props.name} /> 
            
            <h2 className={style.name}>{props.name}</h2> 
            
         </div>

         <div className={style.data} >   
            <div className={style.data2}>
               <h2>Id: </h2>
               {/* <h2>Nombre: </h2> */}
               <h2>Status: </h2>
               <h2>Specie: </h2>
               <h2>Gender: </h2>
               <h2>Origin: </h2>
            </div>
            
            <div className={style.data3} >
               <h2>{props.id} </h2>
               <h2>{props.status}</h2>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
               <h2>{props.origin}</h2>
            </div>
         </div>
      </div>
   );
}

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
