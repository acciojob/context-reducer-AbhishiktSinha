import React from 'react';
import { useContext } from 'react';
import ListContainer from './ListContainer';
import InputForm from './InputForm.js'
import UserLogin from './UserLogin.js';

import '../styles/App.css'

export default function App() {

    return (
        <div id="main">

            <UserLogin />
            <InputForm></InputForm>
            <ListContainer></ListContainer>
        </div>
    )
}

