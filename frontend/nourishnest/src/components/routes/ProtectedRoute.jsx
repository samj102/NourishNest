import { AuthContext} from "../authContext.jsx";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component}) => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    return isAuthenticated ? <Component/> : <Navigate to={{pathname: '/login', state: {from: location}}}/>;
}

export default ProtectedRoute;