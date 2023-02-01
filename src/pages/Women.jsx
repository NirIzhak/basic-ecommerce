import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ItemsContext } from "../context/ItemsContext";

const Women = () => {
  const { women } = useContext(ItemsContext);
  return (
    <div className="products">
      {women.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Women;
