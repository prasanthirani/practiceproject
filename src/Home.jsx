import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [productName, setProductName] = useState("");
  const [productItems, setProductItems] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !productItems) {
      alert("Please fill out all fields!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      items: productItems,
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setProductItems("");
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #4cb8c4, #6a3093)",
        minHeight: "100vh",
        width: "100vw",
        padding: "40px",
        color: "#fff",
      }}
    >
      <div
        className="container bg-light p-5 rounded"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center mb-4 text-dark">Product Details Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-dark">Product Name *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Product Items *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product items (e.g., 5 packs)"
              value={productItems}
              onChange={(e) => setProductItems(e.target.value)}
              required
            />
          </div>

          <h1>Hyderabad</h1>

          <button type="submit" className="btn btn-primary w-100">
            Add Product
          </button>
        </form>
      </div>

      {/* Product Table */}
      {products.length > 0 && (
        <div className="container mt-5 bg-white p-4 rounded">
          <h3 className="text-center text-dark mb-3">Product List</h3>
          <table className="table table-bordered text-center">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Items</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, index) => (
                <tr key={prod.id}>
                  <td>{index + 1}</td>
                  <td>{prod.name}</td>
                  <td>{prod.items}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(prod.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
