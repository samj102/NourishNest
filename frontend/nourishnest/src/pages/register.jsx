import {Box, Button, Container, Typography} from "@mui/material";
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useState} from "react";
import {getCookie} from "../utils.js";

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function registerUser(credentials) {
        // csrf protection
        const csrftoken = getCookie('csrftoken');

        return fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(credentials),
            credentials: 'include'
        })
            .then(response => {
                // Check if the response is ok (status in the range 200-299)
                if (!response.ok) {
                    // Convert non-2xx HTTP responses into errors:
                    return response.json().then(data => Promise.reject(data));
                }
                return response.json();
            })
            .catch(err => {
                // Handle network errors and json parsing errors
                console.error("Error", err);
                throw err; // Re-throwing the error so it can be caught by the caller
            });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        try {
            const response = await registerUser({
                "email": email,
                "username": username,
                "password": password,
            });
            localStorage.setItem('isAuthenticated', "true");
            navigate("/"); // Redirect to home page on successful login
        } catch (err) {
            setError(err.message || "Failed to register"); // Display error message from server
        }
    };

    return (
        <Container component={'main'} maxWidth={'sm'} >
            <Box sx={{ mt: '16%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom>
                    Register
                </Typography>

            </Box>
        </Container>
    )
}

export default Register;