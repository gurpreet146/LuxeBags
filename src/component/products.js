
import React, { useState } from "react";
import "./Products.css";

function Products() {

  const [cart, setCart] = useState(0);

  const products = [
    {
      id: 1,
      name: "Classic Leather Tote",
      price: 2499,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600"
    },
    {
      id: 2,
      name: "Elegant Shoulder Bag",
      price: 1899,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },
    {
      id: 3,
      name: "Luxury Handbag",
      price: 2999,
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600"
    },
    {
      id: 4,
      name: "Modern Sling Bag",
      price: 1599,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"
    }
  ];

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <section className="shop" id="shop">

      <div className="shop-heading">
        <p>OUR COLLECTION</p>
        <h2>Shop Our Handbags</h2>
        <span>
          Find the perfect handbag for every occasion.
        </span>
      </div>

      <div className="product-container">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>

              <p>₹{product.price.toLocaleString("en-IN")}</p>

              <button onClick={addToCart}>
                Add to Cart
              </button>
            </div>

          </div>
        ))}

      </div>

      <div className="cart-message">
        Items in Cart: {cart}
      </div>

    </section>
  );
}

export default Products;
