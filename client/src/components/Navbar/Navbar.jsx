import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const wishItem = useSelector((state) => state.addTofav.value);
  console.log(wishItem);
  return (
    <nav>
      <div className="logo_div">Floral Studio</div>
      <div className="nav_link">
        <ul>
          <NavLink to={""}>Home</NavLink>
          <NavLink to={"/addpage"}>Add Page</NavLink>
          <NavLink to={"/wishlist"}>
            WishList <span>{wishItem.length}</span>
          </NavLink>
          <NavLink to={"#"}>Pricing</NavLink>
          <NavLink to={"#"}>Contacts</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
