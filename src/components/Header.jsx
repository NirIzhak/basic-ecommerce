import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../context/ItemsContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { cart } = useContext(ItemsContext);
  return (
    <header>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <h1>My Store</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/mens"
              className={location.pathname === "/mens" ? "active" : ""}
            >
              Mens
            </Link>
          </li>

          <li>
            <Link
              to="/womens"
              className={location.pathname === "/womens" ? "active" : ""}
            >
              Womens
            </Link>
          </li>

          <li>
            <Link
              to="/jewelerys"
              className={location.pathname === "/jewelerys" ? "active" : ""}
            >
              Jewelerys
            </Link>
          </li>

          <li>
            <Link
              to="/electronics"
              className={location.pathname === "/electronics" ? "active" : ""}
            >
              Electronics
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className={location.pathname === "/cart" ? "active" : ""}
            >
              Cart ({cart.length < 1 || cart == undefined ? "0" : cart.length})
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
