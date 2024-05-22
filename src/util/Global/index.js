import React, { useState } from 'react';

export const Context = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState("");

    return (
        <Context.Provider value={{ userEmail, setUserEmail }}>
            {children}
        </Context.Provider>
    );
};
