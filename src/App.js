import About from "./Screens/About"
import Home from "./Screens/Home.jsx"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route  exact path="/">
    <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
   

   
   
  </Switch>
</div>
</Router>
  );
}

export default App;
