import React from "react";
import Card from "./Card";

import styled from "styled-components";
import { cardArray } from "../../constants";

const Wrapper = styled.section``;

const CardH1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  color: #ffffff;
  font-size: 50px;
  font-family: Recoleta;
  margin-bottom: 30px;
`;
const Cards = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  > :last-child {
    margin-left: 80px;
  }
`;

const Skills = () => {
  return (
    <Wrapper>
      <CardH1>Compétences</CardH1>
      <Cards>
        {cardArray.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Skills;
