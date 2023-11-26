import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('isAuthenticated'));
    const [username, setUsername] = useState(null);

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem('isAuthenticated'));
    }, []);

    const login = (username) => {
        setUsername(username);
        localStorage.setItem('username', username);
        localStorage.setItem('isAuthenticated', "true");
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

