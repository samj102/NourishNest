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

const Index = () => {
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

  return (
    <>
      <Container component="main" maxWidth="lg">
        {/* Hero */}
        <Box sx={{ mt: "16%", textAlign: "center" }}>
          <img
            src={Logo}
            alt="NourishNest Logo"
            style={{ width: "100%", maxWidth: "400px" }}
          />
          <Typography variant="h2" gutterBottom>
            NourishNest
          </Typography>
          <Typography variant="h5" gutterBottom>
            Meal planning has never been so easy.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/register"
          >
            Get Started
          </Button>
        </Box>

        {/* About Section */}
        <Box sx={{ flexGrow: 1, mr: "6em", mt: 40 }}>
          <Grid
            container
            spacing={2}
            sx={{ m: 5 }}
            justifyContent={isSmallScreen ? "center" : "flex-start"}
          >
            <Grid item sm={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Why NourishNest?
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  ✨ Tailored to You
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Choose from a diverse range of delicious recipes or add your
                very own to make every meal feel personal and delightful.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  🌎 Global Recipe Database
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Explore a world of flavors. From Italian pastas to Asian curries
                and much more, find and curate your perfect menu for the week.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  📅 Effortless Meal Planning
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Say goodbye to last-minute dinner decisions. Set your meals for
                the week and let us help you stay organized and inspired.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  🛒 Dynamic Shopping Cart
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Easily see all the ingredients you’ll need for the week. Never
                overbuy or forget an item again. Adjust and personalize your
                list with a simple click.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={
                  "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                style={imageStyle}
                alt={
                  "Overhead view of a vibrant green hummus garnished with sliced tomatoes, pomegranate seeds, pine nuts, and edible flowers, served in a blue-rimmed bowl with silver vintage cutlery on a dark slate background, accompanied by two glasses of iced tea."
                }
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ m: 5 }}
            justifyContent={isSmallScreen ? "center" : "flex-start"}
          >
            <Grid item sm={12} md={6}>
              <img
                src={
                  "https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                style={imageStyle}
                alt={
                  "Top-down view of a workspace with a person's hand holding a tablet displaying a calendar app, alongside a printed planner."
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Key Features
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  🖥️ User-friendly Interface
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Navigate with ease and plan meals in minutes, making your
                culinary journey a breeze.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  🗓️ Interactive Calendar
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Drag and drop your desired recipes into your weekly schedule and
                watch as your shopping list updates instantly.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  📖 Personal Recipe Book
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Save, categorize, and revisit your favourite recipes anytime.
                Your virtual cookbook tailored by you.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={"700"}>
                  📲 Mobile Optimized
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Plan on the go! Access NourishNest anytime, anywhere, from any
                device.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Typography
          variant="h3"
          gutterBottom
          textAlign={"center"}
          sx={{ mt: 20 }}
        >
          Testimonials
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ mt: 5, mb: 20 }}
        >
          <TestimonialCard
            quote="The dynamic shopping cart is a game-changer. I save so much time and money every week. Thank you, NourishNest!"
            name="Mia, 26"
            image={
              "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <TestimonialCard
            quote="NourishNest has revolutionized the way I approach meal planning. I love the global recipe choices and how everything is in one place!"
            name="Alex, 47"
            image={
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Grid>
        <Box sx={{ my: "15em", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Sign Up For Free
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/register"
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Index;
