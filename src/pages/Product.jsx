import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BasicApi from "../../public/data/Api";

const Product = ({ title }) => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [sold, setSold] = useState(0);

  const LoadProduct = async () => {
    try {
      let res = await fetch(`${BasicApi}/${id}`);
      let data = await res.json();
      setSold(data.rating.count);
      setCurrentProduct(data);
    } catch (err) {
      console.log("err => ", err);
    }
  };

  useEffect(() => {
    LoadProduct();
  }, []);

  return (
    <>
      <div className="product-in-page">
        <h1>{currentProduct.title}</h1>
        <img src={currentProduct.image} alt="" />
        <p>
          <strong> Description:</strong> <br /> {currentProduct.description}
        </p>
        <p>
          {" "}
          <strong> Category: </strong>
          {currentProduct.category}
        </p>
        <p>
          {" "}
          <strong>Sold: </strong>
          {sold}
        </p>
      </div>
    </>
  );
};

export default Product;
