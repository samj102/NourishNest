import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Index from './pages/index';
import Login from './pages/login';
import NotFound from './pages/NotFound';
import Register from './pages/register';
import CreateRecipe from './pages/create-recipe';
import {AuthProvider} from "./components/authContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import MyRecipes from "./pages/my-recipes.jsx";
import WeeklyPlanner from "./pages/weekly-planner.jsx";
import BrowseRecipes from "./pages/browse-recipes.jsx";
import Recipe from "./pages/recipe.jsx";
import MyProfile from "./pages/my-profile.jsx";
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
                            <Route path="/create-recipe" element={<ProtectedRoute component={CreateRecipe}/>}/>
                            <Route path="/my-recipes" element={<ProtectedRoute component={MyRecipes}/>}/>
                            <Route path="/planner" element={<ProtectedRoute component={WeeklyPlanner}/>}/>
                            <Route path="/browse" element={<BrowseRecipes/>}/>
                            <Route path="/recipe/:id" element={<Recipe/>}/>
                            <Route path="/profile" element={<ProtectedRoute component={MyProfile}/>}/>
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