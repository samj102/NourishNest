import {Box, Container, Typography, TextField, Button, Chip, Autocomplete, Stack} from "@mui/material";
import { useEffect, useState } from "react";
import { getCSRFToken } from "../utils.js";

const MyProfile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [personalInfo, setPersonalInfo] = useState({ height: '', weight: '', restrictions: [] });

    const tagSuggestions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto', 'Low-Carb', 'Low-Fat', 'Low-Sodium', 'Low-Sugar', 'Paleo', 'Pescatarian', 'Whole30'];


    useEffect(() => {
        fetch('http://localhost:8000/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            },
            credentials: 'include'
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(data => {
            setUserInfo(data.user);
            setPersonalInfo(data.user.personal_info || { height: '', weight: '', restrictions: [] });
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const handleUpdate = (event) => {
        event.preventDefault();
        // Update personal information logic
        fetch('http://localhost:8000/api/personalinfo/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken(),
            },
            body: JSON.stringify(personalInfo),
            credentials: 'include'
        })
            .then(response => {
                if (response.ok) {
                    // Handle successful update
                    console.log("Profile updated successfully");
                } else {
                    throw new Error('Update failed');
                }
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    const handleChange = (event) => {
        setPersonalInfo({ ...personalInfo, [event.target.name]: event.target.value });
    };

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    const handleRestrictionsChange = (event, newValue) => {
        setPersonalInfo({ ...personalInfo, restrictions: newValue });
    }

    return (
        <Container component={'main'} maxWidth={'lg'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
                <Typography variant={'h3'} sx={{mt: 4, mb: 2}}>My Profile</Typography>

                <Typography variant={'h5'}><strong>Username:</strong> {userInfo.username}</Typography>
                <Typography variant={'h5'}><strong>Email:</strong> {userInfo.email}</Typography>

                <form onSubmit={handleUpdate} style={{ marginTop: '20px' }}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}>
                        <TextField
                            label="Height"
                            variant="outlined"
                            name="height"
                            value={personalInfo.height}
                            onChange={handleChange}
                            style={{ marginBottom: '10px' }}
                        />
                        <TextField
                            label="Weight"
                            variant="outlined"
                            name="weight"
                            value={personalInfo.weight}
                            onChange={handleChange}
                            style={{ marginBottom: '10px' }}
                        />
                    </Stack>



                    <form onSubmit={handleUpdate} style={{ marginTop: '20px' }}>
                        {/* ... other fields */}

                        <Autocomplete
                            multiple
                            options={tagSuggestions} // Array of all possible dietary restrictions
                            value={personalInfo.restrictions}
                            onChange={handleRestrictionsChange}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip key={index} label={option} {...getTagProps({ index })} />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField {...params} label="Dietary Restrictions" placeholder="Add restrictions" />
                            )}
                        />

                    </form>
                    <Button type="submit" variant="contained" color="primary" sx={{mt:5}}>
                        Update Information
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default MyProfile;
