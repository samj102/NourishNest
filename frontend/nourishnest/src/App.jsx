import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Index from './pages/index';
import './App.css';


function App() {
    return (
        <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Index/>}/>
        </Routes>
        </Router>
    );
}

export default App;