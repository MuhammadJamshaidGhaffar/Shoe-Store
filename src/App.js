import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <NavLink to="Home">Home</NavLink>
        <NavLink to="products">Products</NavLink>
      </ul>
      <Routes>
        <Route path="/" />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route index />
          <Route path=":productId" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
