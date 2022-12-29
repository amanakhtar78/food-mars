import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { OM_ITEM_CODE, OM_ITEM_DESCRIPTION,  OM_ITEM_COST_PRICE } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        OM_ITEM_CODE,
        OM_ITEM_DESCRIPTION,
        
        OM_ITEM_COST_PRICE,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img">
        {/* <img src={image01} alt="product-img" className="w-50" /> */}
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${OM_ITEM_CODE}`}> {OM_ITEM_DESCRIPTION}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${OM_ITEM_COST_PRICE}</span>
          <button className="addToCart__btn" onClick={addToCart}>
            {" "}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
