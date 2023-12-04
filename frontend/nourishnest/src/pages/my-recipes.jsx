import { useState, useEffect, useContext } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { AuthContext } from "../components/authContext";
import AddIcon from "@mui/icons-material/Add";
import { getCookie, getCSRFToken } from "../utils";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/savedrecipes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCSRFToken(),
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes", error));
  });

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
        <Typography variant={"h3"} sx={{ mt: 4, mb: 2 }}>
          My Recipes
        </Typography>

        {recipes.map((recipe) => (
          <Box key={recipe.id} sx={{ mt: 2 }}>
            <Typography variant="h5">{recipe.name}</Typography>
            {recipe.image ? (
              <img
                src={`http://localhost:8000${recipe.image}`}
                alt={recipe.name}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  height: "150px",
                }}
              ></div>
            )}
            <Button
              component={RouterLink}
              to={`/view-recipe/${recipe.id}`}
              variant="outlined"
            >
              View Recipe
            </Button>
          </Box>
        ))}

        <MuiLink
          component={RouterLink}
          to={"/create-recipe"}
          variant={"body1"}
          sx={{ m: 4 }}
        >
          <Button
            color="primary"
            variant="contained"
            sx={{
              position: "fixed",
              bottom: "15rem",
              right: 16,
              animation: "pulse 2s infinite",
            }}
          >
            <AddIcon />
          </Button>
        </MuiLink>
      </Box>
    </Container>
  );
};

export default MyRecipes;
