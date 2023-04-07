import React from "react";
import './styles.css';

function Cards() {
  return (
    <div class="actor-cards-container">
      <div class="cards-content">
        <a href="/RobertPattinson">
          <div class="card banner-1">Robert Pattinson - Batman </div>
        </a>
        <a href="/ZoeKravotz">
          <div class="card banner-2">Zoë Kravitz - Mulher Gato</div>
        </a>
        <a href="/Andyserkis">
          <div class="card banner-3 ">Andy Serkis - Alfred Pennyworth</div>
        </a>

      </div>
    </div>
  )
}

export default Cards
