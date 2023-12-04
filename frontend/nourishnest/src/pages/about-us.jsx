import {Box, Container, Typography} from "@mui/material";


const AboutUs = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10}}>
                <Typography variant={'h3'} sx={{m: 4}}>About Us</Typography>
                <Typography variant={'body1'}>Welcome to NourishNest! Created as part of our CPS731 term project, NourishNest strives to be the one stop solution for cooking and meal planning.</Typography>

                <Typography variant={'h3'} sx={{m: 4, mt: 10}}>Our Vision</Typography>
                <Typography variant={'body1'}>NourishNest was born from a simple idea: making meal planning accessible and enjoyable for all. In today's fast-paced world, many often struggle with planning their meals. With NourishNest, we aim to change that narrative. Whether you're a busy professional, a budding chef, or someone simply looking to diversify your meals, NourishNest is your trusted companion.</Typography>
            </Box>
        </Container>
    );
}

export default AboutUs;