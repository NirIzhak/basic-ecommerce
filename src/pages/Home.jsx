import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ItemsContext } from "../context/ItemsContext";

const Home = () => {
  const { allItems } = useContext(ItemsContext);
  return (
    <div className="products">
      {allItems.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Home;
