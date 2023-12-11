import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartActions";
import "./Cart.css";
import styled from "styled-components";
import Contacts from "./Contacts";

import PhoneItem from "./PhoneItem";

const CartWithMargin = styled.div`
  margin-top: 100px; /* Добавьте желаемый отступ сверху */
`;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <CartWithMargin>
        <div className="cart">
          <h2>Корзина</h2>

          <section className="cart_items">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <PhoneItem key={item.id} props={item} />)
            ) : (
              <h1 className="cart_empty_title">Корзина пуста</h1>
            )}
          </section>
        </div>
      </CartWithMargin>

      <Contacts />
    </>
  );
};

export default Cart;
