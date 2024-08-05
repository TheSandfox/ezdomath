import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

const AuthProtect = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  useEffect(() => {
    const currentUser = user || JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      {user ? children : null}
    </>
  );
};

export default AuthProtect;
