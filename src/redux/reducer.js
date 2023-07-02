
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer =(state= initialState, action)=>{
    switch(action.type){
        
        case "ADD_FAV":
            return {...state, allCharacters:[...state.allCharacters, action.payload]}
           
        case "REMOVE_FAV":
            const charRemovedFAv= state.myFavorites.filter((char)=>char.id !== Number(action.payload))
            const charRemovedAll= state.allCharacters.filter((char)=>char.id !== Number(action.payload))
            return {...state, myFavorites: charRemovedFAv, allCharacters:charRemovedAll }
            
        case "FILTER":
            return {...state, myFavorites:state.allCharacters.filter((char)=>char.gender === action.payload)}
        
        case "ORDER":
            if(action.payload === 'A')
            {
                const ordenAscendente=  state.allCharacters.sort((a,b)=> a.id - b.id)
                return {...state, myFavorites: ordenAscendente}
            }
            if(action.payload === 'D')
            {
                const ordenDescendente=state.allCharacters.sort((a,b)=> b.id - a.id)
                return {...state, myFavorites: ordenDescendente}
            }
            
        case "All_Characters":
            return {...state, myFavorites:state.allCharacters}

        default:
            return {...state};
    }
}

export default rootReducer;