import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [burgerStat, setBurgerStat] = useState();

  return (
    <nav>
      <section className="nav_head">
        <h2 className="nav-title">PHSHOP</h2>
        <svg
          className="burger"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="black"
          onClick={() => {
            setBurgerStat(!burgerStat);
          }}
        >
          <path
            fill="#333"
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
      </section>

      <section className={`${burgerStat ? "active" : ""} navigation`}>
        <Link to="/">Главная</Link>
        <Link to="/phones">Товары</Link>
        <Link to="/about">О нас</Link>
        <Link to="/cart">Корзина</Link>
      </section>
    </nav>
  );
};

export default Navigation;
