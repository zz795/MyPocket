import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Account from "./pages/account/Account";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              {user ? <Redirect to="/account" /> : <Login />}
            </Route>

            <Route path="/signup">
              {user ? <Redirect to="/account" /> : <Signup />}
            </Route>

            <Route path="/account">
              {!user ? <Redirect to="/login" /> : <Account />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
