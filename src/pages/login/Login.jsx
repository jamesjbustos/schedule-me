import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
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

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  return (
    <div className="login">
      <div className="login-svg">
        <img src="/assets/logo.svg" alt="Login" />
      </div>
      <form onSubmit={handleLogin}>
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
        <div className="button-group">
          <button type="submit">Login</button>
          <button
            type="button"
            onClick={handleCreateAccount}
            className="create-account-btn"
          >
            Create Account
          </button>
        </div>
        {error && (
          <span className="error-message">Wrong email or password!</span>
        )}
      </form>
    </div>
  );
};

export default Login;
