import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "./cartActions";

import Contacts from "./Contacts";

const PhoneDetails = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  if (!product) {
    return <div>Телефон не найден</div>;
  }

  return (
    <>
      <div className="product_info">
        <section className="info">
          <h2 color="white">{product?.name}</h2>
          <p>Описание: {product?.description}</p>

          <section className="order_product">
            <p className="price">{product?.price}</p>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Добавить в корзину
            </button>
          </section>
        </section>

        <img src={product?.image} alt={product?.name} />
      </div>

      <Contacts />
    </>
  );
};

export default PhoneDetails;
