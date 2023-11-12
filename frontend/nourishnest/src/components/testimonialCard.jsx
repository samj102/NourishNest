import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const TestimonialCard = ({ quote, name, image }) => {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                    "{quote}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Avatar src={image} alt={name} sx={{ width: 56, height: 56, mr: 2 }} />
                    <Typography variant="subtitle1" component="div">
                        {name}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;
