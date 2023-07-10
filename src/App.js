import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
// import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Calendar from "./pages/calendar/Calendar";
import CreateAccount from "./pages/createAccount/CreateAccount";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Profile from "./pages/profile/Profile";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="calendar">
              <Route
                index
                element={
                  <RequireAuth>
                    <Calendar />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="profile">
              <Route
                index
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              {/* <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              /> */}
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
