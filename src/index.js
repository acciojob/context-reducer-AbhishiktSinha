import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ListContextProvider from "./context/listContext/ListContextProvider";
import UserContextProvider from "./context/userContext/UserContextProvider";


ReactDOM.render(
    <ListContextProvider>
        <UserContextProvider>
            <App></App>
        </UserContextProvider>
    </ListContextProvider>, 
    document.getElementById('root')
);
