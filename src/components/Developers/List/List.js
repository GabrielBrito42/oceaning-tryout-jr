import React, { useState } from 'react'
import { map, find, get } from 'lodash'
import './List.scss'

const List = () => {

    const[developersList] = useState(JSON.parse(localStorage.getItem('developer-list') || 'null'))
    
    const handleSkillsDropdown = (index) => {
        const menu = document.getElementById("developer-form"+index)
        if(verifyDropdownState(index)) {
            menu.classList.remove("active")
        } else {
            menu.classList.add("active");
        }
    }

    const verifyDropdownState = (index) => {
        const menu = document.getElementById("developer-form"+index)
        const dropdownState = find(menu.classList, (value) => {
            return value === 'active'
        })
        return dropdownState
    }

    return(
        <div className="list-component">
            <div className="container">
                <div className="row">
                    <div className="col-9 quantity-developers d-none d-lg-block">
                        <h3>{get(developersList, '', []).length} {get(developersList, '', []).length === 1 ? 'desenvolvedor encontrado' : 'desenvolvedores adicionados'}</h3>
                    </div>
                    <div className="col-3 d-none d-lg-block">
                        <a href="/developers/register">
                            <button className="main-button">ADICIONAR 
                                <img className="arrow" src="/assets/img/icon-1.svg" alt="arrow"/>
                            </button>
                        </a>
                    </div>
                    <div className="col-12 text-center quantity-developers d-lg-none">
                        <h3>{get(developersList, '', []).length} desenvolvedores encontrados</h3>
                    </div>
                </div>
            </div>
            <br/>
            <div className="developer-list">
                <div className="container scroll-container">
                    <div className="container developer-list-scroll">
                        {map(developersList, (developer, index) => (
                            <div id={"developer-form"+index} className="row skills-container" key={index}>
                                <div className="col-lg-10 col-md-12 padding-info">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-3 col-md-12 name-container"><h2>{get(developer, 'name', '')}</h2></div>
                                        <div className="col-lg-3 col-md-12 email-container align-middle">{get(developer, 'email', '')}</div>
                                        <div className="col-lg-3 d-none d-lg-block quantity-container">{get(developer, 'skills', []).length} habilidades</div>
                                        <div className="col-lg-3 d-none d-lg-block email-container">Recebido em {get(developer, 'registerDate', '')}</div>
                                        <div className="col-md-12 d-lg-none recieved-container">Recebido em {get(developer, 'registerDate', '')}</div>
                                        <div className="col-md-6 d-lg-none quantity-container">{get(developer, 'skills', []).length} habilidades</div>
                                        <div className="col-md-6 d-lg-none">
                                            <button className="list-button" onClick={() => handleSkillsDropdown(index)}>VER HABILIDADES</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 d-none d-lg-block d-flex align-items-center">
                                    <button onClick={() => handleSkillsDropdown(index)} className="view-skills">VER HABILIDADES</button>
                                </div>
                                <div className="col-12 text-start list-container">
                                    <li>
                                        <ul className="container">
                                        {map(developer.skills, (skill) => (
                                            <li className="row list-margin" key={skill}>
                                                <div className="col-8 skills-added">{skill}</div>
                                            </li>
                                        ))}
                                        </ul>
                                    </li>
                                </div>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button-mobile-fixed d-lg-none">
                    <div className="container">
                        <div className="row justify-content-center align-self-center">
                            <div className="col-md-12">
                                <a href="/developers/register">
                                    <button className="mobile-fixed-button">ADICIONAR 
                                        <img className="arrow" src="/assets/img/icon-1.svg" alt="arrow"/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List