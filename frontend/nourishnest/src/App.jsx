import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Index from './pages/index';
import Login from './pages/login';
import NotFound from './pages/NotFound';
import Register from './pages/register';
import CreateRecipe from './pages/create-recipe';
import {AuthProvider} from "./components/authContext";
import './App.css';
import {Box} from "@mui/material";



function App() {
    return (
        <AuthProvider>
            <Router>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <Box component={'main'} sx={{ flexGrow: 1, mt: 4 }}>
                        <Routes>
                            <Route path="/" element={<Index/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/create-recipe" element={<CreateRecipe/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Box>
                    <Footer/>
                </Box>
            </Router>
        </AuthProvider>
    );
}

export default App;