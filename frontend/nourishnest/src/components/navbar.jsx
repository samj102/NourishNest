import {
    AppBar,
    Toolbar,
    Button,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Typography, Box, Stack
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import TextLogo from './TextLogo.jsx';
import { AuthContext } from "./authContext.jsx";
import { useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const { isAuthenticated, logout, username } = useContext(AuthContext);
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                <ListItem component={RouterLink} to="/my-recipes" sx={{color: 'black'}}>
                                    <ListItemText primary={"My Recipes"} sx={{color: 'black'}}/>
                                </ListItem>
                                <ListItem component={RouterLink} to="/planner" sx={{color:'black'}}>
                                    <ListItemText primary={"Planner"} />
                                </ListItem>
                                <ListItem component={RouterLink} to="/browse" sx={{color:'black'}}>
                                    <ListItemText primary={"Browse"} />
                                </ListItem>
                                <ListItem component={RouterLink} to="/profile" sx={{color:'black', pt: 10}}>
                                    <ListItemText primary={"My Profile"} />
                                </ListItem>
                            </List>
                            <Stack direction={'row'} sx={{p: 1.5, pt: 0}}>
                                <AccountCircleIcon sx={{color: 'black'}}/>
                                <Typography sx={{color: 'black', p: 0.5}}>{localStorage.getItem('username')}</Typography>
                            </Stack>
                            <Button variant={"contained"} onClick={handleLogout} sx={{margin: 1}}>Logout</Button>
                        </Drawer>

                    </>
                ) : (
                    <>
                        <Button style={{ color: "black", marginRight: '0.4em'}} variant={"text"} component={RouterLink} to="/my-recipes">My Recipes</Button>
                        <Button style={{ color: "black", marginRight: '0.4em'}} variant={"text"} component={RouterLink} to="/planner">Planner</Button>
                        <Button style={{ color: "black", marginRight: '0.4em'}} variant={"text"} component={RouterLink} to="/browse">Browse</Button>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >

                            <AccountCircleIcon sx={{color: 'black'}}/>
                            <Typography sx={{color: 'black', p: 0.5}}>{localStorage.getItem('username')}</Typography>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} component={RouterLink} to="/profile">My Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                )) : (
                    <Button variant={"contained"} component={RouterLink} to="/login">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;