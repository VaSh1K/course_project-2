import React from "react";
import styled from "styled-components";

const ContactBlock = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  width: 94vw;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
`;

const ContactsWithMargin = styled.div`
  margin-top: 100px; /* Добавьте желаемый отступ сверху */
`;

const Contacts = () => {
  return (
    <ContactsWithMargin>
      <ContactBlock>
        <Title>Контакты</Title>
        <ContactInfo>
          Адрес: Школьная, Минск, Беларусь
          <br />
          Телефон: +375 29 309 02 98
          <br />
          Электронная почта: phone.shop@gmail.by
        </ContactInfo>
      </ContactBlock>
    </ContactsWithMargin>
  );
};

export default Contacts;
