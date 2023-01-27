import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWish } from "../../redux/slice/WishSlice";
import "./Wishlist.scss";

const AddWishlist = () => {
  const wishItem = useSelector((state) => state.addTofav.value);
  const dispatch = useDispatch();
  return (
    <section className="section_wishlist">
      <div className="wishlist_contanier">
        <div className="Wishlist_title">
          <h2>Your WishList</h2>
        </div>

        <div className="wishlist_item">
          <ul>
            {wishItem &&
              wishItem.map((item) => {
                return (
                  <li key={item._id}>
                    <div className="item_pic_name">
                      {/* <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
                  alt=""
                /> */}
                      <span>{item.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        dispatch(removeWish(item._id));
                      }}>
                      Delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AddWishlist;
