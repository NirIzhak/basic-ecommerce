import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ItemsContext } from "../context/ItemsContext";

const Electronics = () => {
  const { electronics } = useContext(ItemsContext);
  return (
    <div className="products">
      {electronics.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Electronics;
