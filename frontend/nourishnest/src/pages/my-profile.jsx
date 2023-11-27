import {Box, Container, Typography} from "@mui/material";

const MyProfile = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>My Profile</Typography>
            </Box>
        </Container>
    );
}

export default MyProfile;