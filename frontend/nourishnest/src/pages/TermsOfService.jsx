import {Box, Container, Typography} from "@mui/material";


const TOS = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', margin: 10}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                    <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>Terms of Service</Typography>
                    <Typography variant={'body1'} sx={{color: 'grey'}}>Last updated: October 15th, 2023</Typography>
                </Box>


                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left', marginTop: 10}}>
                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>1. Introduction</Typography>
                    <Typography variant={'body1'}>Accessing NourishNest implies hypothetical agreement to these terms. They should be read with care.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>2. Use of the Site</Typography>
                    <Typography variant={'body1'}>While NourishNest is primarily an academic project, the platform is designed to simulate real-world functionalities, including data storage.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>3. Account Creation</Typography>
                    <Typography variant={'body1'}>Users may create accounts on this platform. Real data can be used, but it will only be accessible within the scope of the project.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>4. Content and Intellectual Property</Typography>
                    <Typography variant={'body1'}>The content, designs, and features of NourishNest are for academic purposes. Any unauthorized reproduction or use outside the project scope is discouraged.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>5. Restrictions</Typography>
                    <Typography variant={'body1'}>The platform should be used ethically, respecting its academic intent.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>6. Liability and Warranty</Typography>
                    <Typography variant={'body1'}>NourishNest provides no real-world guarantees or warranties. However, for the context of the project, it aims to function without major issues.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>7. Termination</Typography>
                    <Typography variant={'body1'}>Accounts might be modified, terminated, or adjusted based on project needs.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>8. Changes to Terms of Service</Typography>
                    <Typography variant={'body1'}>These terms can be modified based on project requirements or academic feedback.</Typography>

                </Box>
            </Box>
        </Container>
    );
}

export default TOS;