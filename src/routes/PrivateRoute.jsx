import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

// loading
    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'} />;
};

export default PrivateRoute;
