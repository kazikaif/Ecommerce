import { useEffect, useState } from "react";
import "./App.css";
import arrow from "./Images/kartimg/arrow.png";
import { useNavigate } from "react-router-dom";
function Kart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
   useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <>
    <div>
      <button onClick={()=>navigate("/")} className="hom"><img className="arr " src={arrow} alt="" /></button>
    </div>
    <div className="text">

      <section>Your Cart</section>
    </div>
    <div className="place">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="kartdiv">
          {cartItems.map((item) => (
            <div className="cart-product" key={item.id}>
              <img src={item.image} alt={item.title} style={{ width: "100px" }} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
      </>
  );
}

export default Kart;
