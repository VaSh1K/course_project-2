import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "./cartActions";
import { setPhone } from "./ProductActions";
import styled from "styled-components";
import WhyChooseUsBlock from "./styledBlocks";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import { Link, Outlet, useNavigate } from "react-router-dom";

// Создаем стилизованный компонент для контейнера товаров
const PhoneListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

// Создаем стилизованный компонент для карточки товара
const PhoneCard = styled.div`
  transition: 0.2s;
  @import url("https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap");
  background-color: white;
  width: 250px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px white;
  text-align: center;

  cursor: pointer;
  h3 {
    margin: 10px 0;
  }

  p {
    @import url("https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap");
    font-weight: bold;
    margin: 10px 0;
    color: #333;
  }

  img {
    max-width: 100%;
    height: 60%;
  }

  button {
    @import url("https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap");
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  &:hover {
    transition: 0.2s;

    transform: translateY(-10px);
    z-index: 0;
  }
`;

const HomePageContainer = styled.div`
  margin-top: 100px; /* Добавьте желаемый отступ сверху */
`;

const HomePage = () => {
  const navigate = useNavigate(); //хук для навигации по сайту
  const dispatch = useDispatch();

  const { phones } = useSelector((state) => state.phones);

  const [phone, setPhone] = useState([...phones]);

  const handleAddToCart = (phone) => {
    dispatch(addToCart(phone));
  };

  useEffect(() => {
    setPhone([
      { ...phones[0] },
      { ...phones[1] },
      { ...phones[2] },
      { ...phones[3] },
    ]);
  }, [phones]);

  return (
    <HomePageContainer>
      <div className="home-page">
        <div className="banner">
          <h1 className="h11"></h1>
          <h2 className="h22"></h2>
        </div>
        <WhyChooseUsBlock />
        <p>Лучшие модели на рынке</p>
        <p>&#x2193; &#x2193; &#x2193;</p>
        <PhoneListContainer>
          {phone.map((phone) => (
            <PhoneCard
              onClick={(e) => {
                if (e.target.id === "button") return;

                dispatch(setPhone(phone));
                navigate(`/product`);
              }}
              key={phone?.id}
            >
              <img src={phone?.image} alt={phone?.name} />
              <h3>{phone?.name}</h3>
              <p>{phone?.price}</p>
              <button id="button" onClick={() => handleAddToCart(phone)}>
                Добавить в корзину
              </button>
              <p></p>
            </PhoneCard>
          ))}
        </PhoneListContainer>
        <AboutUs />
        <Contacts />
        <Outlet /> {/* Отобразит вложенные маршруты и их компоненты */}
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
