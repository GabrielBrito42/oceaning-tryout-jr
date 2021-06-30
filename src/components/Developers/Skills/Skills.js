import React, { useState } from 'react'
import { filter, includes, map, find } from 'lodash'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import FilteredSkillsComponent from '../FilterSkills/FilterSkills'
import skillsList from '../../../utils/skillslist.json'
import './Skills.scss'

const Skills = () => {

    const[developer, setDeveloper] = useState({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        registerDate: moment().format('L'),
        skills: []
    })
    const[error, setError] = useState(false)
    const[isOpened, setIsOpened] = useState('')
    const[filterInput, setFilterInput] = useState('')
    const[filteredSkills, setFilteredSkills] = useState([''])
    const history = useHistory()

    const validateField = () => {
        if(developer.skills.length<1) {
            setError(true)
            return false
        }
        setError(false)
        return true
    }

    const send = () => {
        if(!validateField()) return

        let developerList = JSON.parse(localStorage.getItem('developer-list') || 'null');
        if(!developerList) developerList = []

        developerList.push(developer)

        localStorage.setItem('developer-list', JSON.stringify(developerList))
        history.push('/success/register')
    }

    const handleFilter = (event) => {
        setFilterInput(event.target.value)
        filterSkills(event)
    }

    const filterSkills = (event) => {
        setFilteredSkills(filter(skillsList, (value) => {
            return includes(value.toLowerCase(), event.target.value.toLowerCase())
        }))
    }

    const addSkill = (skill) => {
        const alreadyInList = find(developer.skills, (value) => {
            return value === skill
        })
        if(alreadyInList) return
        setDeveloper({...developer, skills: [...developer.skills, skill]})
        setFilterInput('')
    }

    const removeSkill = (index) => {
        const newSkills = [...developer.skills] 
        newSkills.splice(index, 1)
        setDeveloper({skills: newSkills})
    }

    const handleSkillsDropdown = () => {
        const image = document.getElementById("arrow-image")
        const menu = document.getElementById("skills-container")
        if(verifyDropdownState()) {
            menu.classList.remove("active")
            image.classList.remove("rotate-arrow")
        } else {
            menu.classList.add("active");
            image.classList.add("rotate-arrow")
        }
        setIsOpened(verifyDropdownState())
    }

    const verifyDropdownState = () => {
        const menu = document.getElementById("skills-container");
        const dropdownState = find(menu.classList, (value) => {
            return value === 'active'
        })
        return dropdownState
    }

    return(
        <div className="skills-component">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <h3>Olá {developer.name},</h3>
                        <h1>Quais são suas habilidades?</h1>
                        <br/>
                        <span>Nos diga como devemos te chamar e qual é o seu e-mail</span>
                        <br/>
                        <span>para que possamos te enviar novidades</span>
                        <br/>
                        <br/>
                        <input id="skill-input" placeholder="Digite uma habilidade" value={filterInput} 
                        className={error ? "error" : "" + filterInput ? " filled-input" : ""} onChange={(event) => handleFilter(event)}/>
                        <br/>
                        {filterInput ? 
                            <div>
                                <FilteredSkillsComponent filteredSkills={filteredSkills} addSkill={addSkill}/> 
                            </div>
                            : 
                        ''}
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <button className="finish-button" onClick={() => send()}>FINALIZAR 
                            <img className="arrow" src="/assets/img/icon-1.svg" alt="arrow"/>
                        </button>
                    </div>
                    <div id="skills-container" className={developer.skills.length>0 ? "skills-container skills-container-filled" : "skills-container"}>
                        {developer.skills.length>0 ?
                        <div className="container skills-info">
                            <div className="row">
                                <div className="col-6 skills-added-quantity">
                                    {developer.skills.length} {developer.skills.length === 1 ? 'Habilidade Adicionada' : 'Habilidades Adicionadas'}
                                </div>
                                <div className="col-5 dropup-skills">
                                    {isOpened ? 'FECHAR' : 'VER HABILIDADES'}
                                </div>
                                <div className="col-1">
                                    <img id="arrow-image" onClick={() => handleSkillsDropdown()} src="/assets/img/icon-5.svg" alt="arrow"/>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="container skills-info">
                            <div className="row">
                                <div className="col-12">
                                    <span className="teste">Nenhuma habilidade adicionada</span>
                                </div>
                            </div>
                        </div>
                        }
                        <div className="col-12 text-start list-container">
                            <li>
                                <ul className="container">
                                {map(developer.skills, (skill, index) => (
                                    <li className="row list-margin" key={skill}>
                                        <div className="col-8 skills-added">{skill}</div>
                                        <div className="col-4 text-end skills-added"><button className="remove-button" onClick={() => removeSkill(index)}>REMOVER</button></div>
                                    </li>
                                ))}
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills