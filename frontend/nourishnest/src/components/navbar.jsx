import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as Link, useNavigate } from 'react-router-dom';
import TextLogo from './TextLogo.jsx';

const Navbar = () => {
    // Check if CSRF token is present in localStorage
    const isLoggedIn = !!localStorage.getItem('crsfToken');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('crsfToken');
        navigate('/');
    }

    return (
        <AppBar style={{ background: '#f3f4f6', boxShadow: '0px 3px 5px rgba(0,0,0,0.2)' }}>
            <Toolbar>
                <TextLogo/>
                {isLoggedIn ? (
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
