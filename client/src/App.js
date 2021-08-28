import Landing from "./app/Landing";
import Footer from "./app/shared/Footer";
import Header from "./app/shared/Header";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import { Provider } from "react-redux";
import { store } from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth.actions";
import { useEffect } from "react";
import { LOGOUT } from "./constants/actionTypes";
function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
   <Provider store={store}>
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
      <Landing/>
     <Footer/>
     </Router>
      </Provider>
  );
}

export default App;