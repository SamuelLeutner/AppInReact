import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/20142022316323.png'
import './footer.css';

function Footer() {
  return (
    <footer>
      <Link style={{ textDecoration: 'none' }} to={"/"}><img id='logo' src={Logo} /></Link>

      <span>Todos os direitos reservador © </span>
      <span>Desenvolvido por Samuel Leutner Ferreira</span>

      <nav class="footer-navigation">
        <ul class="footer-list">
          <header>
            <nav>
              <ul>
                <Link style={{ textDecoration: 'none' }} to={"/"}><li>HOME</li></Link>
                <Link style={{ textDecoration: 'none' }} to={'/sinopse'}><li>SINOPSE</li></Link>
                <Link style={{ textDecoration: 'none' }} to={'/fotos'}><li>FOTOS</li></Link>
                <Link style={{ textDecoration: 'none' }} to={'/'}><li>BATMAN</li></Link>
              </ul>
            </nav>
          </header >

        </ul>
      </nav>

    </footer>
  )
}

export default Footer;
