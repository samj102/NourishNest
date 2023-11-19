import {AppBar, Toolbar, Button, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton} from '@mui/material';
import { Link as Link, useNavigate } from 'react-router-dom';
import TextLogo from './TextLogo.jsx';
import {AuthContext} from "./authContext.jsx";
import {useContext} from "react";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    // Check if authentication cookie exists
    const navigate = useNavigate();

    // mobile menu
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
         logout();
         navigate('/');
    }

    return (
        <AppBar style={{ background: '#f3f4f6', boxShadow: '0px 3px 5px rgba(0,0,0,0.2)' }}>
            <Toolbar>
                <TextLogo/>
                {isAuthenticated ? (isMobile ? (
                    <>
                        <IconButton onClick={() => setMobileMenuOpen(true)}>
                            <MenuIcon sx={{color: 'black'}}/>
                        </IconButton>
                        <Drawer anchor={"right"} open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                            <List>
                                <ListItem component={Link} to="/my-recipes" sx={{color: 'black'}}>
                                    <ListItemText primary={"My Recipes"} sx={{color: 'black'}}/>
                                </ListItem>
                                <ListItem component={Link} to="/planner" sx={{color:'black'}}>
                                    <ListItemText primary={"Planner"} />
                                </ListItem>
                                <ListItem component={Link} to="/browse" sx={{color:'black'}}>
                                    <ListItemText primary={"Browse"} />
                                </ListItem>
                            </List>
                            <Button variant={"contained"} onClick={handleLogout} sx={{margin: 1}}>Logout</Button>
                        </Drawer>

                    </>
                ) : (
                    <>
                        <Button style={{ color: "black", marginRight: '0.4em'}} no wrap variant={"text"} component={Link} to="/my-recipes">My Recipes</Button>
                        <Button style={{ color: "black", marginRight: '0.4em'}} variant={"text"} component={Link} to="/planner">Planner</Button>
                        <Button style={{ color: "black", marginRight: '0.4em'}} variant={"text"} component={Link} to="/browse">Browse</Button>
                        <Button variant={"contained"} onClick={handleLogout} >Logout</Button>
                    </>
                )) : (
                    <Button variant={"contained"} component={Link} to="/login">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
