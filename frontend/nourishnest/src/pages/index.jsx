import { Box, Container, Typography, Button} from "@mui/material";
import logo from "../assets/logo.png";
function Index() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4, pt: 6 }} align="center">
                <img src={logo} alt="logo" width="20%"/>
                <Typography variant="h1" component="h1" gutterBottom>
                    Nourish Nest
                </Typography>
                <Button variant="contained" href="/register">Get Started</Button>
            </Box>
        </Container>
    );
}

export default Index;