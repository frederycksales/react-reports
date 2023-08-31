import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth-context";

function ProtectedRoute({ children }) {
  let auth = useAuth(); 

  if (!auth.isAuthenticated) {
    
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
