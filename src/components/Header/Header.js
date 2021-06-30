import React from 'react'
import './Header.scss'

const Header = () => {

    return(
        <div className="header-component">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center d-lg-none">
                        <br/>
                        <img className="logo" src="/assets/img/logo.png" alt="logo-oceaning"/>
                    </div>
                    <div className="col-8 d-none d-lg-block">
                        <img src="/assets/img/logo.png" alt="logo-oceaning"/>
                    </div>
                    <div className="col-3 text-end d-none d-lg-block">
                        <span className="share">COMPARTILHE</span>
                        <br/>
                        <h4 className="alias">@theoceaning</h4>
                    </div>
                    <div className="col-1 icon d-none d-lg-block">
                        <img className="instagram-icon" src="/assets/img/icon-3.svg" alt="instagram"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header