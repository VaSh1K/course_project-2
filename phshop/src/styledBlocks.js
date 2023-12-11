import React from 'react';
import styled from 'styled-components';

// Создаем стилизованный компонент для блока с описанием магазина
const StoreDescriptionBlock = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Создаем стилизованный компонент для заголовка блока
const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

// Создаем стилизованный компонент для текста описания
const DescriptionText = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
`;

const WhyChooseUsBlock = () => {
  return (
    <StoreDescriptionBlock>
      <Title>Почему вам нужно выбирать наш магазин?</Title>
      <DescriptionText>
        Наш магазин предлагает широкий ассортимент мобильных телефонов по конкурентоспособным ценам. Мы гарантируем качество и надежность каждого устройства. Сотрудничество с ведущими производителями позволяет нам предоставить вам лучшие предложения на рынке. Помимо этого, у нас есть дружелюбная и компетентная команда, готовая помочь вам с выбором и ответить на все ваши вопросы.
      </DescriptionText>
    </StoreDescriptionBlock>
  );
};

export default WhyChooseUsBlock;