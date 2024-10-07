import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductView() {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const showProduct = async () => {
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    showProduct();
  });

  return (
    <div className="container">
      <div className="row">
        {product && product.id && (
          <div className="d-flex p-3 m-3" style={{ border: "1px solid #eee" }}>
            <div className="col-md-6">
              <div className="d-flex justify-content-center">
                <img src={product.image} alt="img" style={{ maxHeight: 280 }} />
              </div>
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p style={{ fontWeight: "bold" }}> ₹&nbsp;{product.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
