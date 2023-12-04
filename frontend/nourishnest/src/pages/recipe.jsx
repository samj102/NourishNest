import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Chip,
    List,
    ListItem,
    ListSubheader,
    Paper, Stack, Grid
} from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { getCSRFToken } from "../utils";

const ViewRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8000/api/savedrecipes`, {
            method: 'GET',
            headers: {
                'X-CSRFToken': getCSRFToken(),
            },
            credentials: 'include',
        })
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        setError('Recipe not found');
                        navigate("/not-found"); // Redirect to a not found page or handle as needed
                    } else {
                        throw new Error('Network response was not ok');
                    }
                }
                return response.json();
            })
            .then(data => {
                const recipe = data.find(recipe => recipe.id.toString() === id);
                console.log(recipe)
                if (recipe) {
                    setRecipe(recipe);
                } else {
                    navigate("/not-found");
                }
            })
            .catch(err => {
                setError('Failed to fetch recipe');
                console.error('Fetch error:', err);
            });
    }, [id, navigate]);

    if (error) {
        return <Container><Typography color="error">{error}</Typography></Container>;
    }

    if (!recipe) {
        return <Container><Typography>Loading...</Typography></Container>;
    }

    return (
        <Container component='main' maxWidth='lg'>
            <Box sx={{ marginTop: 10, marginBottom: 20 }}>
                <Typography variant={'h4'} align={'center'}>{recipe.name}</Typography>

                {/* Display Additional Information */}
                <Grid container spacing={25} sx={{justifyContent: 'center', paddingTop: '3em', alignItems: 'center'}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant={'body1'}>Calories: {recipe.calories || 'N/A'}</Typography>
                        <Typography variant={'body1'}>Prep Time: {recipe.preptime || 'N/A'}</Typography>
                        <Typography variant={'body1'}>Cook Time: {recipe.cooktime || 'N/A'}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Display Image if exists */}
                        {recipe.image && <img src={recipe.image} alt={recipe.name} style={{ maxWidth: '60%'}} />}
                    </Grid>
                </Grid>

                {/* Display Tags */}
                <Paper sx={{ my: 2, p: 2 }}>
                    <ListSubheader>Tags</ListSubheader>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {recipe.tags && recipe.tags.length > 0 ? (
                            recipe.tags
                                .filter(tag => tag.trim() !== "") // Filter out empty strings
                                .map((tag, index) => (
                                    <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
                                ))
                        ) : (
                            <Typography>No tags available</Typography>
                        )}
                    </Box>
                </Paper>



                <Grid container spacing={25} sx={{justifyContent: 'center', paddingTop: '3em'}}>
                    <Grid item xs={12} md={6}>
                        {/* Display Ingredients */}
                        <Paper sx={{ my: 2, p: 2 }}>
                            <ListSubheader>Ingredients</ListSubheader>
                            <List>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <ListItem key={index}>{ingredient.quantity} {ingredient.ingredient}</ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    <Grid item={12} md={6}>
                        {/* Display Steps */}
                        <Paper sx={{ my: 2, p: 2 }}>
                            <ListSubheader>Steps</ListSubheader>
                            <List>
                                {recipe.steps.map((step, index) => (
                                    <ListItem key={index}>{step.name}: {step.step}</ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>







            </Box>
        </Container>
    );
}

export default ViewRecipe;
