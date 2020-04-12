import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero!" />

                <h1>Register new case</h1>
                <p>Describe the case and find a Hero to help!</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Home
                </Link>
            </section>
            <form>
                <input placeholder="Case title" />
                <textarea placeholder="Description" />

                <input placeholder="Value" />

                <button className="button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}