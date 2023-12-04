import {Box, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getCSRFToken} from "../utils.js";

const MyProfile = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const getUserInfo = async () => {
            const user = await getUser();
            setUserInfo(user);
        }
        getUserInfo().then(r => console.log(r))
    });

    const getUser = async () => {
        const response = await fetch('http://localhost:8000/api/personalinfo', {
            method: 'GET',
            headers: {
                'X-CSRFToken': getCSRFToken(),
            },
            credentials: 'include'
        });
        const data = await response.json();
        return data;
    }

    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>My Profile</Typography>
            </Box>
        </Container>
    );
}

export default MyProfile;