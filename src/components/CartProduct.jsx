import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

const CartProduct = ({ image, title, price, id }) => {
  const { RemoveItemFromCart } = useContext(ItemsContext);

  return (
    <>
      <div className="product-in-cart-container">
        <div className="product-in-cart">
          <img src={image} alt="" />
          <h4>{title}</h4>
          <h4>{price} $</h4>
          <button
            onClick={() => {
              RemoveItemFromCart(id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
