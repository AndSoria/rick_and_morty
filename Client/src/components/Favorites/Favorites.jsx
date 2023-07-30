import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import style from './Favorites.module.css'
import Card from "../card/Card";
import { filterCards, orderCards, viewAllChar } from "../../redux/action";



const Favorites =()=>{

    const [aux, setAux]=useState(false);

    const dispatch=useDispatch();

    const myFavorites= useSelector(state=>state.myFavorites);

    useEffect(()=>{
        dispatch(viewAllChar());
    },[])

    
    
    const handleFilter=(e)=>{
    
       
       if(e.target.value === 'All_Characters') {
        dispatch(viewAllChar());
       }
       else{
           dispatch(filterCards(e.target.value));
       }
    }

    const handleOrder=(e)=>{
        dispatch(orderCards(e.target.value));
        setAux(!aux); //si esta en true cambia a false y vicerversa, es para que se vuelva a renderizar 
}

    return (
        <div className={style.windowFav}>
                <div className={style.filters}>
                    <select  className={style.filtersSelect} onChange={handleOrder}>
                        <option className={style.option} value="A">Ascendente</option>
                        <option className={style.option} value="D">Descendente</option>
                    </select>
                    <select className={style.filtersSelect}  onChange={handleFilter}>
                        <option className={style.option} value="All_Characters">All Characters</option>
                        <option className={style.option} value="Male">Male</option>
                        <option className={style.option} value="Female">Female</option>
                        <option className={style.option} value="Genderless">Genderless</option>
                        <option className={style.option} value="unknown">Unknown</option>
                    </select>
                </div>
            
            <div className={style.containerCards}>

            { 
                myFavorites.map(char=>(
                    <Card
                        key={char.id}
                        id={char.id}
                        name= {char.name}
                        status={char.status}
                        species={char.species}
                        gender= {char.gender}
                        origin={char.origin?.name}
                        image={char.image}
                    
                    />))
                }
            </div>
        </div>
    )
}

export default Favorites
// const mapStateToProps= (state)=>
// {
//    return {
//       myFavorites: state.myFavorites
//    }
// }

// export default connect(mapStateToProps,null)(Favorites)