import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Index from './pages/index';
import './App.css';
import {Box} from "@mui/material";



function App() {
    return (
        <Router>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <Box component={'main'} sx={{ flexGrow: 1, mt: 4 }}>
                    <Routes>
                        <Route path="/" element={<Index/>}/>
                    </Routes>
                </Box>
                <Footer/>
            </Box>
        </Router>
    );
}

export default App;