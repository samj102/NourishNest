import {Box, Container, Typography} from "@mui/material";


const WeeklyPlanner = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>Weekly Planner</Typography>
            </Box>
        </Container>
    );
}

export default WeeklyPlanner;