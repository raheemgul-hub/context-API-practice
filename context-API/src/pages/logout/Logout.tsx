import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate(); // Use useNavigate for redirection

  useEffect(() => {
    // Clear the token and any other user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("id"); // Remove other items as needed
      localStorage.removeItem("Data");
    // Redirect the user to the login page
    navigate("/");
  }, [navigate]);

  return null; // No need to render anything
}

export default Logout;
