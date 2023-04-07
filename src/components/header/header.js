import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/20142022316323.png'
import './header.css';

function Header() {

    return (
        <header>
            <Link style={{ textDecoration: 'none' }} to={"/"}><img id='logo' src={Logo} /></Link>
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to={"/"}><li>HOME</li></Link>
                    <Link style={{ textDecoration: 'none' }} to={'/sinopse'}><li>SINOPSE</li></Link>
                    <Link style={{ textDecoration: 'none' }} to={'/fotos'}><li>FOTOS</li></Link>
                    <Link style={{ textDecoration: 'none' }} to={'/'}><li>BATMAN</li></Link>
                </ul>
            </nav>
        </header >
    )
}

export default Header; 
