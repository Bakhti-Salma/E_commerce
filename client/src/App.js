import Landing from "./app/Landing";
import Footer from "./app/shared/Footer";
import Header from "./app/shared/Header";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
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
