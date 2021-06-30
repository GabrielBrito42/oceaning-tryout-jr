import React from 'react'
import FooterComponent from '../../Footer/Footer'
import './Register.scss'

const Register = () => {

    return(
        <div className="register-component">
            <div className="container">
                <div className="row justify-content-center align-self-center">
                    <div className="col-12 text-center">
                        <h3>Parabéns!</h3>
                        <h1>Suas habilidades foram enviadas</h1>
                        <br/>
                        <span>Faça parte dessa jornada com a Oceaning e conquiste o</span>
                        <br/>
                        <span>mundo com suas habilidades de programação</span>
                        <br/>
                    </div>
                    <div className="col-lg-5 col-md-8">
                        <a href="/developers/list">
                            <button className="main-button">VER TODOS 
                                <img className="arrow" src="/assets/img/icon-2.svg" alt="arrow"/>
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

export default Register