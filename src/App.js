import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import Product from "./Product";
import Products from "./Products";

import images from "./Images.js";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products data={data} />} />
        <Route path="products/:productId" element={<Product data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

const data = [
  {
    id: "1",
    url: images.blueShoes,
    name: "Blue Shoes",
    price: 30,
    description:
      "Men's Running Shoes Men's Slip-on Shoes Tennis Walking Casual Shoes Black Gym Breathable Rubber Work Shoes fashin shoes",
  },
  {
    id: "2",
    url: images.blackShoes,
    name: "Black Shoes",
    price: 40,
    description:
      "Men's Running Shoes Men's Slip-on Shoes Tennis Walking Casual Shoes Black Gym Breathable Rubber Work Shoes fashin shoes",
  },
  {
    id: "3",
    url: images.lukeShoes,
    name: "Luke Shoes",
    price: 50,
    description:
      "Men's Running Shoes Men's Slip-on Shoes Tennis Walking Casual Shoes Black Gym Breathable Rubber Work Shoes fashin shoes",
  },
  {
    id: "4",
    url: images.redShoes,
    name: "Red Shoes",
    price: 20,
    description:
      "Men's Running Shoes Men's Slip-on Shoes Tennis Walking Casual Shoes Black Gym Breathable Rubber Work Shoes fashin shoes",
  },
];
