import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from './NavBar.module.css'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

const NavBar =({onSearch,random,logout})=>{
    
    const {pathname}=useLocation();
    
    const renderSearch=false;

    if(pathname === '/'){
        renderSearch=true;
    }
    
    return (
    <div className={style.nav}>
        <div className={style.containerTitle}>
            <h1 className={style.Titulo}> Rick and Morty </h1>
        </div>
        <div className={style.navButtons}>
            <Link to={'/home'}> 
                <button>Home</button>
            </Link>
            {/* <SearchBar onSearch={onSearch} random={random}/> */}
            <Link to={'/favorites'}> 
                <button>Favorites</button>
            </Link>
            <Link to={'/about'}>
                <button>About</button>
            </Link>
            <button className={style.logoutButton} onClick={logout}>Logout</button>
        </div>
            <div className={style.positionSearchBar}>
             { (!pathname.includes('detail') && !pathname.includes('favorites')  && !pathname.includes('about')) && <SearchBar onSearch={onSearch} random={random}/> }
            </div>
    </div>
    );
};

export default NavBar;

