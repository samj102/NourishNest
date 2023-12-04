import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";
import { getCSRFToken } from "../utils";

const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filterName, setFilterName] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const csrfToken = getCSRFToken();

    fetch(`http://localhost:8000/api/globalrecipes?name=${filterName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes", error));
  };

  useEffect(() => {
    // Fetch initial recipes when the component mounts
    handleSearch();
  }, [filterName]); // Trigger search when filterName changes

  const handleSaveRecipe = (recipeId) => {
        navigate(`/save-recipe/${recipeId}`)
  };

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

        {/* Add a search input and button */}
        <Box sx={{ mb: 3 }}>
          <input
            type="text"
            placeholder="Filter recipe name"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
          >
            Search
          </Button>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {recipes.map((recipe) => (
            <Grid item key={recipe.id} xs={12} md={4}>
              <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 8 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {recipe.name}
                </Typography>
                {recipe.image ? (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: 8,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height: "150px",
                      borderRadius: 8,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ImageIcon fontSize={"large"} />
                  </div>
                )}
                <Button
                  component={RouterLink}
                  to={`/view-recipe-global/${recipe.id}`}
                  variant="outlined"
                  sx={{ mt: 2, mr: 1 }}
                >
                  View Recipe
                </Button>
                <Button
                  onClick={() => handleSaveRecipe(recipe.id)}
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Save Recipe
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BrowseRecipes;
