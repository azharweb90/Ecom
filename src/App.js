import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContentLayout from "./components/ContentLayout";
import ProductView from "./components/ContentLayout/ProductView";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error, "categories error");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <Router>
        <Header categories={categories} />
        <Routes>
          <Route path="/" element={<ContentLayout categories={categories} />} />
          <Route path="/:id" element={<ProductView />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
