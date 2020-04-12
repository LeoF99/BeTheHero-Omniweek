import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero!" />

                    <h1>Insert your info</h1>
                    <p>Join us! Join the plataform and Be The Hero!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Log in
                    </Link>
                </section>
                <form>
                    <input placeholder="Institution name" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}