import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('isAuthenticated'));
    const [username, setUsername] = useState(null);

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem('isAuthenticated'));
    }, []);

    const login = (data) => {
        setUsername(data.username);
        localStorage.setItem('username', data.username);
        localStorage.setItem('isAuthenticated', "true");
        localStorage.setItem('is_staff', data.is_staff);
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('is_staff');
        localStorage.removeItem('plannerData');
        setIsAuthenticated(false);
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

