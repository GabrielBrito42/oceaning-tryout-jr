import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Register.scss'

const Register = () => {

    const[user, setUser] = useState({
        name: '',
        email: '',
        step: 1
    })
    const[error, setError] = useState(false)
    const history = useHistory()

    const handleUserForm = () => {
        if(!validateInput()) return
        if(user.step === 1) {
            setUser({...user, step: 2})
            return
        }
        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
        history.push('/developers/skills')
    }

    const validateInput = () => {
        if(user.step === 1 && !user.name) {
            setError(true)
            return false
        }
        if(user.step === 2 && !user.email) {
            setError(true)
            return false
        }
        setError(false)
        return true
    }

    const handleInputChange = (event) => {
        validateInput()
        setUser({...user, [event.target.name]: event.target.value})
    }

    return(
        <div className="register-component">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 text-start">
                        <h3>Vamos começar</h3>
                        <h1>Como devemos te chamar?</h1>
                        <br/>
                        <span>Nos diga como devemos te chamar e qual é o seu e-mail</span>
                        <br/>
                        <span>para que possamos te enviar novidades</span>
                        <br/>
                        {user.step === 1 ? 
                            <input className={error ? "error" : "" + user.name ? " filled-input" : ""} 
                            value={user.name} name="name" placeholder="Digite seu nome" onChange={(e) => handleInputChange(e)}/>
                        :
                            <input className={error ? "error" : "" + user.email ? " filled-input" : ""} 
                            value={user.email} name="email" placeholder="Digite seu email" onChange={(e) => handleInputChange(e)}/>
                        }
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <button className="register-button" onClick={handleUserForm}>CONTINUAR<img className="arrow" src="/assets/img/icon-1.svg" alt="arrow"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register