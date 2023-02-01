import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ItemsContext } from "../context/ItemsContext";

const Jewelerys = () => {
  const { jewelerys } = useContext(ItemsContext);
  return (
    <div className="products">
      {jewelerys.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Jewelerys;
