import React, { useEffect, useState } from 'react';

export const Context = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState({id:'1'});

    useEffect(()=>{

    },[isUserLoggedIn, userLoggedIn])

    return (
        <Context.Provider value={{
            isUserLoggedIn, userLoggedIn,
            setIsUserLoggedIn, setUserLoggedIn 
             }}>
            {children}
        </Context.Provider>
    );
};
