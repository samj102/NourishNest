import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as Link, useNavigate } from 'react-router-dom';
import TextLogo from './TextLogo.jsx';
import { AuthContext } from '../AuthContext.jsx';
import { useContext } from 'react';

const Navbar = () => {
    // Check if authentication cookie exists
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        // Perform logout logic here
        setIsAuthenticated(false);
        // Remove session cookie or call API to invalidate the session
    };

    return (
        <AppBar style={{ background: '#f3f4f6', boxShadow: '0px 3px 5px rgba(0,0,0,0.2)' }}>
            <Toolbar>
                <TextLogo/>
                {isAuthenticated ? (
                    <>
                        <Button style={{ color: "black", marginRight: '0.4em'}} no wrap variant={"text"} component={Link} to="/my-recipes">My Recipes</Button>
                        <Button style={{ color: "black", marginRight: '0.4em'}} variant={"text"} component={Link} to="/planner">Planner</Button>
                        <Button style={{ color: "black", marginRight: '0.4em'}} variant={"text"} component={Link} to="/browse">Browse</Button>
                        <Button variant={"contained"} onClick={handleLogout} >Logout</Button>
                    </>
                ) : (
                    <Button variant={"contained"} component={Link} to="/login">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
