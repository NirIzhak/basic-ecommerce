import { useContext } from "react";
import CartProduct from "../components/CartProduct";
import { useEffect } from "react";
import { useState } from "react";
import { ItemsContext } from "../context/ItemsContext";

const Cart = () => {
  const { cart } = useContext(ItemsContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let pricing = 0;
    cart.forEach((item) => {
      pricing += item.price;
    });
    setTotalPrice(pricing);
  }, [cart]);

  return (
    <>
      <h1 className="text-center">Your Cart:</h1>
      {cart.length != 0 ? (
        <div>
          <h2 className="text-center">Total Price: {totalPrice} $</h2>
          {cart.map((it) => (
            <CartProduct key={it.id} {...it} />
          ))}
        </div>
      ) : (
        <h1 className="text-center big-space">
          Your Cart Is Empty, Find Something You Like!
        </h1>
      )}
    </>
  );
};
export default Cart;
