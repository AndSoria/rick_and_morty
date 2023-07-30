import React from 'react';
import style from './About.module.css';
import imagenAbout from '../../assets/image/fotoAbout.jpg'

function About (){

    return(
    <div className={style.stiloAbout}>  
        <h2>¡Me alegra que estes aqui!</h2>
        <p>¡Hola!
        Mi nombre es Andrés Soria y soy estudiante de la cohorte 13b de SoyHenry, donde estoy cursando la carrera de Desarrollador Full Stack. Me complace presentarte esta página web dedicada a la famosa serie Rick and Morty.
        
        Esta aplicación web es el resultado de mi trabajo y esfuerzo para incorporar y afianzar los conocimientos que hemos adquirido a lo largo de nuestra formación como desarrolladores. Estoy comprometido en mantenerla en constante actualización para ofrecerte la mejor experiencia posible.
        
        Espero que disfrutes de esta aplicación y, si tienes alguna sugerencia o comentario para mejorarla, no dudes en hacérmelo saber. Tu opinión es importante y me ayudará a brindarte una experiencia aún mejor.
        
        ¡Saludos y gracias por tu visita!</p>
        <img className={style.stiloImg} src={imagenAbout} />
    </div>
    )


}
export default About;