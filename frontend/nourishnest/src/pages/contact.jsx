import {Box, Button, Container, TextField, Typography} from "@mui/material";


const Contact = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 5}}>
                <Typography variant={'h3'} sx={{mt: 4}}>Contact Us</Typography>

                <Typography variant={'body1'} sx={{m: 4}}>Fill out the form below and we'll definitely get back to you.</Typography>
                <TextField variant={'outlined'} label={'Name'} sx={{m: 2, width: "20em"}}/>
                <TextField variant={'outlined'} label={'Email'} sx={{m: 2, width: "20em"}}/>
                <TextField variant={'outlined'} label={'Message'} sx={{m: 2, width: "20em"}} multiline rows={4}/>
                <Button variant={'contained'} sx={{m: 2}}>Submit</Button>

            </Box>
        </Container>
    );
}

export default Contact;