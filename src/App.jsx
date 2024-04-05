import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";

function App() {
  return (
    <div className="App">
      <nav className="appNav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>
    </div>
  );
}

export default App;
