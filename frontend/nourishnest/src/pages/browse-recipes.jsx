import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { getCookie, getCSRFToken } from "../utils";
import axios from "axios";

const BrowseRecipesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "auto",
  marginTop: 4, // Use a number directly for margin
});

const BrowseRecipes = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipes, setRecipes] = useState([]);

  function browseRecipes(recipe) {
    // csrf protection

    return fetch("http://localhost:8000/api/globalrecipes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCSRFToken(),
      },
      body: JSON.stringify(recipe),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          // Check for a 403 status code (Forbidden)
          if (response.status === 403) {
            // Handle the 403 error, for example, redirect to a login page
            // or display an error message to the user
            console.error("User is not authenticated. Redirecting to login.");
            // Redirect to login page or show an error message
          } else {
            // Convert non-2xx HTTP responses into errors:
            return response.json().then((data) => Promise.reject(data));
          }
        }
        return response.json();
      })
      .catch((err) => {
        // Handle network errors and JSON parsing errors
        console.error("Error", err);
        throw err; // Re-throwing the error so it can be caught by the caller
      });
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/globalrecipes?name=${recipeName}`
      );
      browseRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);

      // Log more information about the error
      if (error.response) {
        // The request was made, but the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <BrowseRecipesContainer>
      <h1>Browse Recipes</h1>
      <TextField
        label="Enter Recipe Name"
        variant="outlined"
        sx={{ marginBottom: 2 }} // Use sx for styling
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ alignSelf: "flex-end" }}
      >
        Search
      </Button>

      {recipes.length > 0 && (
        <div>
          <h2>Matching Recipes:</h2>
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>{recipe.name}</li>
            ))}
          </ul>
        </div>
      )}
    </BrowseRecipesContainer>
  );
};

export default BrowseRecipes;
