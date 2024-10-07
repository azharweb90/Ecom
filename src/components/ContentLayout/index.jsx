import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function ContentLayout({ categories }) {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("categoryName");

  const getAllProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
    setSortedProducts(response.data);
  };
  const onCategorySelect = async (category) => {
    const response = await axios(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(response.data);
    setSortedProducts(response.data);
  };

  const sortProducts = (sort) => {
    let sortedArray = [...products];

    switch (sort) {
      case "price":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "category":
        sortedArray.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case "ascending":
        sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "descending":
        sortedArray.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        sortedArray = [...products];
    }
    setSortedProducts(sortedArray);
  };

  useEffect(() => {
    if (query) {
      onCategorySelect(query);
    } else {
      getAllProducts();
    }
  }, [query]);

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-3">
          <Sidebar
            categories={categories}
            onCategorySelect={onCategorySelect}
            sortProducts={sortProducts}
          />
        </div>
        <div className="col-md-9">
          <Dashboard products={sortedProducts} />
        </div>
      </div>
    </div>
  );
}
