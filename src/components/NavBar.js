import React from 'react';
import logo from '../styles/images/pokedexLogo.png';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();


    return (
        <div>
            <div className='nav-bars-container'>
                <div className='nav-red-bar'></div>
                <div className='nav-pokeball'><div className='nav-pokeball2'></div></div>
                <div className='nav-black-bar'></div>
                <img onClick={() => navigate("/pokedex")} src={logo} alt="logo" className='nav-login_logo_img'/>
            </div>
        </div>
    );
};

export default NavBar;



