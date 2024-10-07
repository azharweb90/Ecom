import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ products }) {
  return (
    <div className="container-fluid">
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="d-flex card h-100">
              <img
                className="card-img-top p-2"
                style={{ maxWidth: 200, alignSelf: "center" }}
                src={product.image}
                alt="product"
              />
              <div className="card-body align-self-end">
                <h5 className="card-title" style={{ fontSize: 18 }}>
                  {product.title}
                </h5>
                <p className="card-text pr-2">
                  {product.description.substring(0, 100)}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ fontWeight: "bold" }}>
                  ₹&nbsp;{product.price}
                </li>
                <li className="list-group-item">{product.category}</li>
              </ul>
              <div className="card-body d-flex justify-content-between">
                <Link to={`/${product.id}`} className="card-link">
                  View Details
                </Link>
                <button className="btn btn-primary" style={{ maxHeight: 40 }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
