import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import TestimonialCard from "../components/testimonialCard.jsx";
import Logo from "../assets/logo.png";

const Login = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Style for images to maintain equal height with text content
  const imageStyle = isSmallScreen
    ? {
        width: "100%",
        boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
        alignSelf: "center",
        marginBottom: "3em",
      }
    : { width: "80%", boxShadow: "0px 3px 5px rgba(0,0,0,0.2)" };
};

export default Login;
