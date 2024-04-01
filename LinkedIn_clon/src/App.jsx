import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeH from "./components/HomeH";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route exact path="/" Component={Login}>
          </Route>
          <Route path="/home" Component={HomeH} >
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;