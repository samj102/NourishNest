import {Box, Container, Typography, Link, Grid} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import TextLogo from './TextLogo.jsx';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#f3f4f6', p: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <TextLogo />
                        <Typography variant="subtitle1" align="left" color="black" component="p">
                            Plan, Cook, Savor - Your Culinary
                        </Typography>
                        <Typography variant="subtitle1" align="left" color="black" component="p">
                            Adventure Awaits. 🍴
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box component='nav' display="flex" flexDirection="row" justifyContent="center" sx={{ height: '100%' }}>
                            <Link component={RouterLink} to="/about" variant="subtitle1" color="text.primary" underline="hover" sx={{ p: 1 }}>
                                About Us
                            </Link>
                            <Link component={RouterLink} to="/contact" variant="subtitle1" color="text.primary" underline="hover" sx={{ p: 1 }}>
                                Contact
                            </Link>
                            <Link component={RouterLink} to="/privacy" variant="subtitle1" color="text.primary" underline="hover" sx={{ p: 1 }}>
                                Privacy Policy
                            </Link>
                            <Link component={RouterLink} to="/terms" variant="subtitle1" color="text.primary" underline="hover" sx={{ p: 1 }}>
                                Terms of Service
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
