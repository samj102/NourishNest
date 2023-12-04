// import {
//     Alert,
//     Box,
//     Button,
//     Checkbox,
//     Container, Fab,
//     FormControlLabel,
//     Link,
//     TextField,
//     Typography,
// } from "@mui/material";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { getCookie, getCSRFToken } from "../utils";
// import { AuthContext } from "../components/authContext";
// import AddIcon from '@mui/icons-material/Add';

// const MyRecipes = () => {
//   return (
//     <Container component={"main"} maxWidth={"lg"}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           marginTop: 10,
//         }}
//       >
//         <Typography variant={"h3"} sx={{ mt: 4, mb: 2 }}>
//           My Recipes
//         </Typography>

//         <Link
//             component={RouterLink}
//             to={"/create-recipe"}
//             variant={"body1"}
//             sx={{ m: 4 }}
//         >
//            <Fab color="primary" aria-label="add" sx={{
//                 position: 'fixed',
//                 bottom: '15rem',
//                 right: 16,
//                animation: 'pulse 2s infinite',
//            }}>
//                 <AddIcon />
//            </Fab>
//         </Link>

//       </Box>
//     </Container>
//   );
// };

// export default MyRecipes;

import { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { AuthContext } from "../components/authContext";
import AddIcon from "@mui/icons-material/Add";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const userId = user ? user.id : null;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8000/api/users/${userId}/recipes`)
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error fetching recipes", error));
    }
  }, [userId]);

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
