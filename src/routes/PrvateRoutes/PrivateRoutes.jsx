import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return;
    }
    
    if (user) {
        return children;
    }

    return <Navigate to="/login"/>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;