import {Box, Container, Typography} from "@mui/material";


const Contact = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10}}>
                <Typography variant={'h3'} sx={{m: 4}}>Contact</Typography>

            </Box>
        </Container>
    );
}

export default Contact;