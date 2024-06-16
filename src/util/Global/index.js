import React, { useState } from 'react';

export const Context = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userLoggedIn, setUseLoggedIn] = useState({id:'1'});

    return (
        <Context.Provider value={{
             userEmail, userLoggedIn,
             setUserEmail, setUseLoggedIn 
             }}>
            {children}
        </Context.Provider>
    );
};
