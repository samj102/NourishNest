import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {useContext, useState} from "react";
import { getCSRFToken } from "../utils.js";
import {AuthContext} from "../components/authContext.jsx";

const Register = () => {
  const { isAuthenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function registerUser(credentials) {
    return fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCSRFToken(),
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    })
      .then((response) => {
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
          // Convert non-2xx HTTP responses into errors:
          return response.json().then((data) => Promise.reject(data));
        }
        return response.json();
      })
      .catch((err) => {
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
         email: email,
         username: username,
         password: password,
       });
       login(response);
       navigate("/my-recipes"); // Redirect to home page on successful login
     } catch (err) {
       setError(err.message || "Failed to register"); // Display error message from server
     }
   };

  return (
    <Container component={"main"} maxWidth={"sm"}>
      <Box sx={{ mt: "16%", textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          Register Page
        </Typography>

        <Box
          component={"form"}
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit}
        >
          {/* Email Input */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Username Input */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Password Input */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          {/* Register Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          {/* Link to Login Page */}
          <RouterLink to="/login">
            <Typography variant="p" color={"black"}>
              Already have an account? Login
            </Typography>
          </RouterLink>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
