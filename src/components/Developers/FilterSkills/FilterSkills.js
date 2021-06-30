import React from 'react'
import { map } from 'lodash'
import './FilterSkills.scss'

const FilterSkills = ({ filteredSkills, addSkill }) => {

    return(
        <div className="filtered-skills-component">
            <div className="row">
                <div className="col-12">
                    {map(filteredSkills, skill => (
                        <button className="skills-button" key={skill} onClick={() => addSkill(skill)}>{skill} <img className="arrow" src="/assets/img/icon-4.svg" alt="arrow"/></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterSkills