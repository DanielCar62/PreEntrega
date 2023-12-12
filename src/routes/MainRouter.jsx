import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";
import Item from "../pages/Item";



const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent/>
      <Routes>
        <Route path="/" element={<Home greeting= {"Bienvenido"}/>} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:id" element={<Item greeting= {"Detalle del producto"}/>} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;