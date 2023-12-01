import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { getCookie, getCSRFToken } from "../utils";
import { AuthContext } from "../components/authContext";

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
      </Box>
    </Container>
  );
};

export default MyRecipes;
