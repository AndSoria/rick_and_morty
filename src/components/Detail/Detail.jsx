import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; //se usa este hook para tomar el valor del segmento dinarmico de la url
import { useState } from 'react'; 
import { useEffect } from 'react'; //los hooks funcionan en los componentes funcionales
import DetailCard from './DetailCard';
import style from './Detail.module.css';
function Detail() {

    const {id}= useParams(); //esta usamos para tomar el valor del id, usando destructuring
    const [charDetail, setCharDetail]= useState({}); //crea un estado local de character

useEffect(()=>{
         
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
            setCharDetail(data);
        } else {
           window.alert('There are no characters with that ID');
        }
     });
     return setCharDetail({});

}, [id])//recibe dos paramentros, una funcion que se ejecute luego que se monta el componente y un array de dependencias, si necesitamos que cada vez que se modifica algo se actualice el componente, ese algo va en el array de dependencias

  return (<div className={style.containerDetail}>
            <DetailCard

                key={charDetail.id}
                id={charDetail.id}
                name= {charDetail.name}
                status={charDetail.status}
                species={charDetail.species}
                gender= {charDetail.gender}
                origin={charDetail.origin?.name}
                image={charDetail.image}
             />
             </div>
        )
}

export default Detail