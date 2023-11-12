import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        // Define other light theme-specific properties
    },
    typography: {
        fontFamily: [
            'Comfortaa',
        ].join(','),
    },
    // Add any other customizations specific to the light theme
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // Define other dark theme-specific properties
    },
    // Add any other customizations specific to the dark theme
});

export { lightTheme, darkTheme };
