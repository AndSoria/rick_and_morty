import Card from '../card/Card';
import style from './Cards.module.css'
// props es characthers
export default function Cards({characters, onClose}) {
   return (
      
      <div className={style.containerCards}>{
         characters.map(charac=>(
            <Card 

               key={charac.id}
               id={charac.id}
               name= {charac.name}
               status={charac.status}
               species={charac.species}
               gender= {charac.gender}
               origin={charac.origin.name}
               image={charac.image}
               onClose={onClose}

            />
         )) 
         }
       
      </div>

   );
}
