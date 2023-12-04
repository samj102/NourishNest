import {Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const PrivacyPolicy = () => {
    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', margin: 10}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                    <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>Privacy Policy</Typography>
                    <Typography variant={'body1'} sx={{color: 'grey'}}>Last updated: October 15th, 2023</Typography>
                </Box>


                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left', marginTop: 10}}>
                    <Typography variant={'body1'} sx={{mt: 4, mb: 2}}><strong>Note:</strong> This Privacy Policy is for illustrative purposes, crafted for a student project. All details, unless otherwise specified, are fictional.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>1. Introduction</Typography>
                    <Typography variant={'body1'}>Welcome to NourishNest. This policy outlines how we handle and protect your personal data on this platform.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>2. Information We Collect</Typography>
                    <Typography variant={'body1'}>While NourishNest is a student project, the platform is designed to store the following types of data for:</Typography>
                    <Typography variant="h6">Information We Collect</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Personal identifiers like usernames, email addresses" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Account credentials (passwords are encrypted and not directly accessible)" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="User-generated content such as recipes and meal plans" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Browser type and settings" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Interaction data with our platform" />
                        </ListItem>
                    </List>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>3. How We use Your Data</Typography>
                    <Typography variant={'body1'}>On this platform, data might be used to:</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Personalize the user experience" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Provide recipe recommendations" />
                        </ListItem>
                    </List>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>4. Data Sharing and Disclosure</Typography>
                    <Typography variant={'body1'}>Data stored on this platform will not be shared externally.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>5. Data Security</Typography>
                    <Typography variant={'body1'}>The platform uses encryption, firewalls, and secure databases, to protect user data from unauthorized access.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>6. Children's Data</Typography>
                    <Typography variant={'body1'}>Children under 13 are not permitted to use the platform without parental consent.</Typography>

                    <Typography variant={'h4'} sx={{mt: 4, mb: 2}}>7. Changes to This Privacy Policy</Typography>
                    <Typography variant={'body1'}>This policy might be adjusted based on project revisions. Users of the platform will be notified of updates in advance.</Typography>

                </Box>
            </Box>
        </Container>
    );
}

export default PrivacyPolicy;