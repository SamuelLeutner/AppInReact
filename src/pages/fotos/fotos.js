import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './fotos.css'


function Fotos() {
    return (
        <>
            <Header />

            <div id="banner2"></div>

            <div class="cards-fotos">

                <div class="actor-cards-fotos">

                    <div class="card-banner1"></div>
                    <div class="card-banner2"></div>
                    <div class="card-banner3"></div>
                    <div class="card-banner4"></div>

                </div>


                <div class="actor-cards-fotos">

                    <div class="card-banner5"></div>
                    <div class="card-banner6"></div>
                    <div class="card-banner7"></div>
                    <div class="card-banner8"></div>

                </div>


                <div class="actor-cards-fotos">

                    <div class="card-banner9"></div>
                    <div class="card-banner10"></div>
                    <div class="card-banner11"></div>
                    <div class="card-banner12"></div>

                </div>

                <div id="banner3"></div>

            </div>

            <Footer />
        </>
    )
}

export default Fotos
