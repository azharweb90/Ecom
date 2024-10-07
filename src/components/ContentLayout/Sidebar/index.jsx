import React from "react";

export default function Sidebar({
  categories,
  onCategorySelect,
  sortProducts,
}) {
  const handleChange = (e) => {
    sortProducts(e.target.value);
  };
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item active">Select Category</li>
        {categories.map((category) => (
          <li
            className="list-group-item list-group-item1"
            style={{
              cursor: "pointer",
            }}
            key={category}
            onClick={() => {
              onCategorySelect(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
      <div>
        <h5 style={{ marginTop: 15 }}>Filters</h5>

        <div className="d-flex justify-content-between py-2">
          <select
            className="form-select"
            aria-label="Sort products"
            onChange={handleChange}
          >
            <option option="">Default Sorting</option>
            <option value="price">sort by price</option>
            <option value="category">sort by category</option>
            <option value="ascending">sort by ascending</option>
            <option value="descending">sort by descending</option>
          </select>
        </div>
      </div>
    </div>
  );
}
