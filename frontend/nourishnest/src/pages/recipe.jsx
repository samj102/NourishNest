import {Box, Container, Typography} from "@mui/material";
import {useParams} from "react-router";


const Recipe = () => {
    const { id } = useParams();


    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>Recipe</Typography>
                <Typography variant={'h4'} sx={{mb: 2}}>ID: {id}</Typography>
            </Box>
        </Container>
    );
}

export default Recipe;