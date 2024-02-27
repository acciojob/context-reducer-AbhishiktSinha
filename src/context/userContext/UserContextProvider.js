import React from 'react';
import userContext from "./userContext";
import { useState } from "react";

export default function UserContextProvider({children}) {

    const [userInfo, setUserInfo] = useState({currentUser: "", isAuthenticated: false});

    function login() {
        if (!userInfo.isAuthenticated) {

            setUserInfo({
                currentUser: 'Rohan',
                isAuthenticated: true,
            })
        }
    }

    function signOut() {

        if (userInfo.isAuthenticated) {

            setUserInfo({
                currentUser: '',
                isAuthenticated: false
            })
        }
    }

    return (
        <userContext.Provider value={{userInfo, login, signOut}} >
            {children}
        </userContext.Provider>
    )
}