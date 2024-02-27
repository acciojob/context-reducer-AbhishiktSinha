import React, { memo } from 'react';
import { useContext } from 'react';
import userContext from '../context/userContext/userContext';

function UserLogin() {

    const {userInfo:{currentUser, isAuthenticated}, login, signOut} = useContext(userContext);

    return (
        <div className="auth-container">

            <div className="buttons-container">
                
                <button 
                    id="login-btn"
                    onClick={login}>
                        Login
                    </button>

                <button 
                    id="signout"
                    onClick={signOut}>
                        Sign-Out
                    </button>
            </div>

            <div id="current-user">
                {`Current user: ${currentUser}, isAuthenticated: ${isAuthenticated ? 'Yes' : 'No'}`}
            </div>
        </div>
    )
}

export default memo(UserLogin);