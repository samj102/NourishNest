// import { Box, Container, Typography } from "@mui/material";
// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/system";
// import { getCookie, getCSRFToken } from "../utils";
// import axios from "axios";
// import { useEffect } from "react";

// const BrowseRecipesContainer = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   maxWidth: "400px",
//   margin: "auto",
//   marginTop: 20, // Use a number directly for margin
// });

// const BrowseRecipes = () => {
//   const [recipeName, setRecipeName] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch all global recipes when the component mounts
//     const fetchAllRecipes = async () => {
//       try {
//         const response = await browseRecipes(""); // Pass an empty string to get all recipes
//         setRecipes(response); // Assuming response is an array of recipes
//       } catch (err) {
//         setError(err.message || "Error fetching recipes");
//       }
//     };

//     fetchAllRecipes();
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   function browseRecipes(recipe) {
//     // csrf protection

//     return fetch(`http://localhost:8000/api/globalrecipes`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-CSRFToken": getCSRFToken(),
//       },
//       credentials: "include",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           // Check for a 403 status code (Forbidden)
//           if (response.status === 403) {
//             // Handle the 403 error, for example, redirect to a login page
//             // or display an error message to the user
//             console.error("User is not authenticated. Redirecting to login.");
//             // Redirect to login page or show an error message
//           } else {
//             // Convert non-2xx HTTP responses into errors:
//             return response.json().then((data) => Promise.reject(data));
//           }
//         }
//         return response.json();
//       })
//       .catch((err) => {
//         // Handle network errors and JSON parsing errors
//         console.error("Error", err);
//         throw err; // Re-throwing the error so it can be caught by the caller
//       });
//   }

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await browseRecipes({ recipeName });
//     } catch (err) {
//       setError(err.message || "Incorrect Credentials"); // Display error message from server
//     }
//   };

//   return (
//     <BrowseRecipesContainer>
//       <h1>Browse Recipes</h1>
//       <TextField
//         label="Enter Recipe Name"
//         variant="outlined"
//         sx={{ marginBottom: 2 }} // Use sx for styling
//         value={recipeName}
//         onChange={(e) => setRecipeName(e.target.value)}
//       />

//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSearch}
//         sx={{ alignSelf: "flex-end" }}
//       >
//         Search
//       </Button>

//       {recipes.length > 0 && (
//         <div>
//           <h2>Matching Recipes:</h2>
//           <ul>
//             {recipes.map((recipe) => (
//               <li key={recipe.id}>{recipe.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </BrowseRecipesContainer>
//   );
// };

// export default BrowseRecipes;

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";

const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSearch = () => {
    fetch(`http://localhost:8000/api/globalrecipes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) =>
        console.error("Error fetching filtered recipes", error)
      );
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/globalrecipes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes", error));
  }, []);

  return (
    <Container component={"main"} maxWidth={"lg"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Typography variant={"h3"} sx={{ mt: 4, mb: 3 }}>
          Browse Recipes
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Filter Cuisine"
            variant="outlined"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ marginLeft: 2 }}
          >
            Search
          </Button>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {recipes.map((recipe) => (
            <Grid item key={recipe.id} xs={12} md={4}></Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BrowseRecipes;
