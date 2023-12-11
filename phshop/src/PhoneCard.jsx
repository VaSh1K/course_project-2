import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setPhone } from "./ProductActions";
import { addToCart } from "./cartActions";

export default function PhoneCard({ props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (phone) => {
    dispatch(addToCart(phone));
  };

  return (
    <section
      style={{ cursor: "pointer" }}
      className="phone_item"
      onClick={(e) => {
        if (e.target.id === "btn") return;

        dispatch(setPhone(props));
        navigate(`/product`);
      }}
    >
      <img src={props?.image} />
      <section className="item_interface">
        <h3>{props?.name}</h3>
        <p style={{ color: "#333", margin: 0 }}>{props?.price}</p>
      </section>

      <button
        id="btn"
        className="add_to_cart_btn"
        onClick={() => {
          handleAddToCart(props);
        }}
      >
        Добавить в корзину
      </button>
    </section>
  );
}
