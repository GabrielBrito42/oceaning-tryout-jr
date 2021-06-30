import React from 'react'
import './Footer.scss'

const Footer = () => {

    return(
        <div className="footer-component">
            <div className="container">
                <div className="row justify-content-center align-self-center">
                    <div className="col-4 text-center">
                        <img src="/assets/img/icon-3.svg" alt="instagram"/>
                    </div>
                    <div className="col-7 text-start">
                        <span className="share">COMPARTILHE</span>
                        <h4 className="alias">@theoceaning</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer