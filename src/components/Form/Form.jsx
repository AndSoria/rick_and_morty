import React from 'react'
import style from './Form.module.css'
import { useState } from 'react';
import {validation} from './validation';


function Form({login}) {

  const [userData, setUserData]= useState({email: '', password: ''});
  const [errors, setErrors]= useState({})
 
  const handleChange = function(event){
    const nameProp= event.target.name;
    const value=event.target.value;

    setErrors(validation({...userData,[nameProp]:value}))
    setUserData({...userData,[nameProp]:value})

  }

  function handleSubmit(evento){
    evento.preventDefault()
    login(userData)
}


  return (
    
    <div className={style.containerForm}>
      <form onSubmit={handleSubmit} >
        <div className={style.containerImage}>

        </div>
          <div className={style.containerData}>
            <input className={style.containerFormInput} type='text' name='email' placeholder='rick@mail.com' value={userData.email} onChange={handleChange}></input>
            <span className={style.spanErrors}>{errors.email}</span>

            <input className={style.containerFormInput} type='text' name='password' placeholder='pass123' onChange={handleChange}></input>
            <span className={style.spanErrors}>{errors.password}</span>
          </div>

        
          <div>
            <button className={style.containerFormButton} type='submit' >Login</button>
          </div>

      </form>
    </div> 
  )
}

export default Form;