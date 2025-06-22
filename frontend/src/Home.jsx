import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import image from "./Images/image.png";
import All from "./Images/All.png";
import image2 from "./Images/Kart.png";
import user from "./Images/user.png";
import fashion from "./Images/fashion.png";
import electronics from "./Images/electronics.png";
import furniture from "./Images/furniture.png";
import toys from "./Images/toys.png";
import grocery from "./Images/grocery.png";
import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchItem, setSearchItem] = useState("");
  const [Category, setCategory] = useState("All");
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});
  const [quantities, setQuantities] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
useEffect(() => {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const qtyMap = {};
  cartFromStorage.forEach(item => {
    qtyMap[item.id] = item.quantity || 1;
  });
  setQuantities(qtyMap);
}, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("API fetch error: " + err);
      });
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const filterProducts = products.filter((product) => {
    const matchCategory = Category === "All" || product.category.toLowerCase().includes(Category.toLowerCase());
    const matchSearch = product.title.toLowerCase().includes(searchItem.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <header>
        <section>
          <img className="img" src={image} alt="" />
        </section>
        <section>
          <input
            className="search"
            type="text"
            name="search"
            placeholder="Search Product..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </section>
        <section className="k">
          <button className="btn" onClick={() => navigate("/kart")}>
            <img className="img2" src={image2} alt="" />
          </button>
        </section>
        <section>
          {isLoggedIn ? (
            <div className="profile-logout">
              <button className="lgn2" onClick={() => navigate("/profile")}>
                <img src={user} className="img4" alt="" />
              </button>
            </div>
          ) : (
            <button className="lgn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </section>
      </header>

      <main>
        <div className="category">
          <div onClick={() => setCategory("All")}>
            <img className="fashionimg" src={All} alt="" />
            <h4>All</h4>
          </div>
          <div onClick={() => setCategory("men's clothing")}>
            <img className="fashionimg" src={fashion} alt="" />
            <h4>Fashion</h4>
          </div>
          <div onClick={() => setCategory("electronics")}>
            <img className="fashionimg" src={electronics} alt="" />
            <h4>Electronics</h4>
          </div>
          <div onClick={() => setCategory("jewelery")}>
            <img className="fashionimg" src={grocery} alt="" />
            <h4>Jewellery</h4>
          </div>
        </div>

        <div className="h1">
          <h1>Popular Products</h1>
        </div>

        <div className="imp">
          {filterProducts.map((product) => (
            <div className="product" key={product.id}>
              <img className="pro" src={product.image} alt={product.title} />
              <section className="name">{product.title}</section>
              <section className="price">${product.price}</section>
              <section className="rating">⭐ {product.rating?.rate}</section>

              <section className="btns">
                {quantities[product.id] > 0 ? (
                  <div className="count">
                    <button
                      onClick={() => {
                        setQuantities((prev) => ({
                          ...prev,
                          [product.id]: Math.max((prev[product.id] || 0) - 1, 0),
                        }));
                      }}
                    >
                      -
                    </button>
                    <span>{quantities[product.id]}</span>
                    <button
                      onClick={() => {
                        setQuantities((prev) => ({
                          ...prev,
                          [product.id]: (prev[product.id] || 0) + 1,
                        }));
                      }}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="cart-btn"
                    onClick={() => {
                      setQuantities((prev) => {
  const updated = {
    ...prev,
    [product.id]: 1,
  };
  const addedProduct = { ...product, quantity: 1 };
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const isAlreadyInCart = existingCart.find((item) => item.id === product.id);
 
  if (!isAlreadyInCart) {
    existingCart.push(addedProduct);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  }

  return updated;
});

                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                  </button>
                )}
                <button
                  className="fav-btn"
                  onClick={() => {
                    setFavorites((prev) => ({
                      ...prev,
                      [product.id]: !prev[product.id],
                    }));
                  }}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: favorites[product.id] ? "red" : "white" }}
                  />
                </button>
              </section>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
