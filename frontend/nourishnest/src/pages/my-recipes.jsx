import { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/savedrecipes`, {
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
          My Recipes
        </Typography>

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
                      borderRadius: 8, // Add rounded corners
                    }}
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height: "150px",
                      borderRadius: 8, // Add rounded corners
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}

                  >
                      <ImageIcon fontSize={'large'}/>
                  </div>
                )}
                <Button
                  component={RouterLink}
                  to={`/view-recipe/${recipe.id}`}
                  variant="outlined"
                  sx={{ mt: 2 }}
                >
                  View Recipe
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Button
          component={RouterLink}
          to={"/create-recipe"}
          color="primary"
          variant="contained"
          sx={{
            position: "fixed",
            bottom: "15rem",
            right: 16,
            animation: "pulse 2s infinite",
            mt: 4,
          }}
        >
          <AddIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default MyRecipes;
