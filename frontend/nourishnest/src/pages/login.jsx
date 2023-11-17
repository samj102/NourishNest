import {Alert, Box, Button, Checkbox, Container, FormControlLabel, Link, TextField, Typography} from "@mui/material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function loginUser(credentials) {
        // csrf protection
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

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
            const response = await loginUser({
                "username": username,
                "password": password,
            });
            localStorage.setItem('isAuthenticated', "true");
            navigate("/"); // Redirect to home page on successful login
        } catch (err) {
            setError(err.message || "Failed to login"); // Display error message from server
        }
    };


    return (
        <Container component={'main'} maxWidth={'xs'}>
            <Box sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant={'h2'}>
                    Login
                </Typography>
                <Box component={'form'} noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField margin={'normal'} required fullWidth id={'username'} label={'Username'} name={'username'} autoComplete={'username'} autoFocus value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                    <TextField margin={'normal'} required fullWidth name={'password'} label={'Password'} type={'password'} id={'password'} autoComplete={'current-password'} value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <FormControlLabel control={<Checkbox value={'remember'} color={'primary'}/>} label={'Remember me'}/>

                    {/* Display error message */}
                    {error && (
                        <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                            {error}
                        </Alert>
                    )}


                    <Button type={'submit'} fullWidth variant={'contained'} sx={{ mt: 3, mb: 2 }}>Login</Button>

                    <RouterLink to={'/register'}>
                        <Typography variant='p'>
                            Don't have an account? Sign Up
                        </Typography>
                    </RouterLink>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;