import FooterComponent from '../Footer/Footer'
import React from 'react'
import './Home.scss'

const Home = () => {

    return(
        <div className="home-component">
            <div className="container">
                <div className="row justify-content-center align-self-center">
                    <div className="col-12 text-center">
                        <h3>Time de desenvolvimento</h3>
                        <h1>Sua evolução começa agora</h1>
                        <br/>
                        <span>Faça parte dessa jornada com a Oceaning e conquiste o</span>
                        <br/>
                        <span>mundo com suas habilidades de programação</span>
                        <br/>
                    </div>
                    <div className="col-lg-4 col-md-12 text-center">
                        <a href="/developers/register">
                            <button className="main-button">COMEÇAR AGORA 
                            <img className="arrow" src="/assets/img/icon-1.svg" alt="arrow"/>
                            </button>
                        </a>
                    </div>
                    <div className="col-12 d-lg-none">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home