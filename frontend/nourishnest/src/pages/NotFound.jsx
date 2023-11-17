import {Box} from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Button, Container, Typography} from "@mui/material";

const NotFound = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{ mt: '16%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom>
                    404 Not Found
                </Typography>
                <Typography variant="h5" gutterBottom>
                    The page you are looking for does not exist.
                </Typography>
                <Button variant="contained" color="primary" component={RouterLink} to="/">
                    Go Home
                </Button>
            </Box>
        </Container>
    )
}

export default NotFound