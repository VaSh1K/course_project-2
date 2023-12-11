import React from "react";
import styled from "styled-components";

const AboutUsBlock = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  margin: 0 auto;
  width: 94vw;
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

const DescriptionText = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
`;

const AboutUsWithMargin = styled.div`
  margin-top: 100px; /* Добавьте желаемый отступ сверху */
`;

const AboutUs = () => {
  return (
    <AboutUsWithMargin>
      <AboutUsBlock>
        <Title>О нас</Title>
        <DescriptionText>
        Добро пожаловать в захватывающий мир современных технологий, представленный в нашем виртуальном храме инноваций - интернет-магазине телефонов! Здесь, среди перелива цифровых красок и вихря передовых технологий, раскрывается уникальное пространство, где каждый посетитель становится свидетелем революции в мире мобильных устройств.
        Покупая у нас, вы получаете не только передовое устройство, но и обещание качественного обслуживания. Наша команда экспертов всегда готова помочь вам выбрать идеальный телефон, а гибкая система доставки и удобные опции оплаты делают процесс покупки максимально комфортным.
        </DescriptionText>
      </AboutUsBlock>
    </AboutUsWithMargin>
  );
};

export default AboutUs;
