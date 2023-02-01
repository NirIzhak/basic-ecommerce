import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ItemsContext } from "../context/ItemsContext";

const Mens = () => {
  const { mens } = useContext(ItemsContext);
  return (
    <div className="products">
      {mens.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Mens;
