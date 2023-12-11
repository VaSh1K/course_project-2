import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "./cartActions";

import Contacts from "./Contacts";
import PhoneCard from "./PhoneCard";
import Navigation from "./Navigation";
import WhyChooseUsBlock from "./styledBlocks";

export default function Catalog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { phones } = useSelector((state) => state.phones);

  const [filtredPhones, setFiltred] = useState([...phones]);

  const filterBy = (filterParam) => {
    let temp = [...phones];

    if (filterParam === "none") {
      setFiltred(phones);
      return;
    }

    temp.sort((first, second) => {
      let firstPrice = first.price.replace("$", "");
      let secondPrice = second.price.replace("$", "");

      if (firstPrice > secondPrice) return 1;
      else if (firstPrice < secondPrice) return -1;

      return 0;
    });

    if (filterParam === "price_up") temp = temp.reverse();

    setFiltred(temp);
  };

  return (
    <>
      <WhyChooseUsBlock />

      <section className="filter_interface">
        <p>фильтр</p>

        <select
          className="filter"
          onChange={(e) => {
            filterBy(e.target.value);
          }}
        >
          <option value="none">нет</option>
          <option value="price_up">цена+</option>
          <option value="price_down">цена-</option>
        </select>
      </section>

      <section className="catalog">
        {filtredPhones?.map((phone) => (
          <PhoneCard key={phone.id} props={phone} />
        ))}
      </section>

      <Contacts />
    </>
  );
}
