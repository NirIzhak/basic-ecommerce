import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../context/ItemsContext";
const ProductCard = ({ title, price, image, id }) => {
  const navigate = useNavigate();
  const { AddItemToCart } = useContext(ItemsContext);

  return (
    <div className="product-card">
      <img
        src={image}
        alt=""
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      />
      <h2>{title}</h2>
      <p>{price} $</p>
      <button
        onClick={() => {
          AddItemToCart(id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
