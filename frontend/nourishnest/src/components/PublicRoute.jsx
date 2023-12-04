import { AuthContext} from "./authContext.jsx";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ component: Component}) => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    return isAuthenticated ? <Navigate to={{pathname: '/my-recipes', state: {from: location}}}/> : <Component/>;
}

export default PublicRoute;