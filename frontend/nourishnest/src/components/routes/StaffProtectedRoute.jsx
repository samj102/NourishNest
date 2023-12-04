import React from 'react';
import { Navigate } from 'react-router-dom';

const StaffProtectedRoute = ({ component: Component }) => {
    const isStaff = localStorage.getItem('is_staff') === 'true';

    // Redirect to home if not authenticated or not a staff member
    if (!isStaff) {
        return <Navigate to="/" />;
    }

    return <Component />;
};

export default StaffProtectedRoute;
