import { createContext, useState, useEffect } from "react";
import BasicApi from "../../public/data/Api";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [jewelerys, setJewelery] = useState([]);
  const [mens, setMens] = useState([]);
  const [women, setWoman] = useState([]);
  const [cart, setCart] = useState([]);

  const LoadData = async () => {
    try {
      let res = await fetch(`${BasicApi}`);
      let data = await res.json();
      setAllItems(data);
    } catch (err) {
      console.log("err => ", err);
    }
  };

  const LoadElectronics = async () => {
    try {
      let res = await fetch(`${BasicApi}/category/electronics`);
      let data = await res.json();
      setElectronics(data);
    } catch (err) {
      console.log("err => ", err);
    }
  };

  const LoadJewelerys = async () => {
    try {
      let res = await fetch(`${BasicApi}/category/jewelery`);
      let data = await res.json();
      setJewelery(data);
    } catch (err) {
      console.log("err => ", err);
    }
  };

  const LoadMens = async () => {
    try {
      let res = await fetch(`${BasicApi}/category/men's%20clothing`);
      let data = await res.json();
      setMens(data);
    } catch (err) {
      console.log("err => ", err);
    }
  };

  const LoadWomen = async () => {
    try {
      let res = await fetch(`${BasicApi}/category/women's%20clothing`);
      let data = await res.json();
      setWoman(data);
    } catch (err) {
      console.log("err => ", err);
    }
  };

  const AddItemToCart = (id) => {
    if (cart.find((pr) => pr.id == id) == undefined) {
      let item = allItems.filter((it) => id == it.id);
      setCart([...cart, ...item]);
    } else alert("Item In Cart");
  };

  const RemoveItemFromCart = (id) => {
    setCart(cart.filter((item) => id != item.id));
  };

  useEffect(() => {
    LoadData();
    LoadElectronics();
    LoadJewelerys();
    LoadMens();
    LoadWomen();
  }, []);

  const value = {
    allItems,
    electronics,
    jewelerys,
    mens,
    women,
    cart,
    setCart,
    AddItemToCart,
    RemoveItemFromCart,
  };

  return (
    <>
      <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
    </>
  );
};

export default ItemsContextProvider;
