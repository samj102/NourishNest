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
import { getCSRFToken } from "../utils";

const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSearch = () => {
    const csrfToken = getCSRFToken();

    fetch(`http://localhost:8000/api/globalrecipes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken, // Include CSRF token in the header
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
