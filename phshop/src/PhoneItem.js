import { useDispatch } from "react-redux";

import { removeFromCart } from "./cartActions";

export default function PhoneItem({ props }) {
  const dispatch = useDispatch();

  const remove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <section className="phone_item">
      <img src={props?.image} />
      <section className="item_interface">
        <h3>{props?.name}</h3>
        <button
          className="remoove"
          onClick={() => {
            remove(props?.id);
          }}
        >
          Удалить
        </button>
      </section>
    </section>
  );
}
