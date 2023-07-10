import { useState, useContext } from "react";
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./createAccount.scss";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CreateAccount = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleCreateAccount = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="create-account">
      <div className="create-account-svg">
        <img src="/assets/logo.svg" alt="Create Account" />
      </div>
      <form onSubmit={handleCreateAccount}>
        <Link to="/login" className="back-to-login">
          <ArrowBackIosIcon fontSize="inherit" /> Back
        </Link>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create Account</button>
        {error && (
          <span className="error-message">Failed to create account!</span>
        )}
      </form>
    </div>
  );
};

export default CreateAccount;
