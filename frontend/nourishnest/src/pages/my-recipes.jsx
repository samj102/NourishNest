import {
    Alert,
    Box,
    Button,
    Checkbox,
    Container, Fab,
    FormControlLabel,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { getCookie, getCSRFToken } from "../utils";
import { AuthContext } from "../components/authContext";
import AddIcon from '@mui/icons-material/Add';

const MyRecipes = () => {
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

        <Link
            component={RouterLink}
            to={"/create-recipe"}
            variant={"body1"}
            sx={{ m: 4 }}
        >
           <Fab color="primary" aria-label="add" sx={{
                position: 'fixed',
                bottom: '15rem',
                right: 16,
               animation: 'pulse 2s infinite',
           }}>
                <AddIcon />
           </Fab>
        </Link>

      </Box>
    </Container>
  );
};

export default MyRecipes;
