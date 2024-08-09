// src/FormComponent.js

import React, { useState } from 'react';

function FormComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder="First Name"
                    style={{ marginBottom: '10px', width: '200px', padding: '5px' }}
                />
                <br />
                <input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    placeholder="Last Name"
                    style={{ marginBottom: '10px', width: '200px', padding: '5px' }}
                />
                <br />
                <button type="submit" style={{ padding: '5px 20px' }}>
                    Submit
                </button>
            </form>
            <h1 style={{ marginTop: '20px' }}>{fullName}</h1>
        </div>
    );
}

export default FormComponent;
