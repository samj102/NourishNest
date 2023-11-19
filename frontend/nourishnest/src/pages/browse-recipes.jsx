import {Box, Container, Typography} from "@mui/material";


const BrowseRecipes = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>Browse Recipes</Typography>
            </Box>
        </Container>
    );
}

export default BrowseRecipes;