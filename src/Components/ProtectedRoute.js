import { Navigate } from "react-router-dom";
//ProtectedRoute component for all inside component safe 
const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" replace />;
    } else if (localStorage.getItem("token") === 'ppppp') {
        return children
    }
};
export default ProtectedRoute