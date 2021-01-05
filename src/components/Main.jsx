import React from "react";
import styled from "styled-components";

import { devices } from "../constants";

import LogoHome from "../assets/logos/logo_home.png";
import Section from "./common/Section";

const Wrapper = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

  @media screen and (min-width: ${devices.tablet}px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const BlockText = styled.div`
  margin-right: 3vw;
  max-width: 740px;
`;

const HeadTitle = styled.h2`
  font-size: 18px;
  color: #9d67f8;
  margin: 0 0 14px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const Dash = styled.span`
  width: 78px;
  height: 5px;
  margin-right: 8px;
  text-transform: uppercase;
  background-color: #9d67f8;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: normal;
  font-family: "Recoleta", serif;
  line-height: 50px;
  color: #ffffff;
  margin: 0;

  @media screen(min-width: ${devices.tablet}px) {
    font-size: 60px;
    line-height: 70px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #d7cbff;
  margin: 18px 0 0;
`;

const Main = () => {
  return (
    <Wrapper id="main">
      <BlockText>
        <HeadTitle>
          <Dash />
          Florian Poux
        </HeadTitle>
        <Title>Hey ! Je m'appelle Florian, et je suis développeur front.</Title>
        <Paragraph>
          Étudiant React/Node.js à la Wild Code School de Bordeaux depuis
          septembre 2020.
        </Paragraph>
      </BlockText>
      <img src={LogoHome} alt="Logo de Florian Poux" />
    </Wrapper>
  );
};

export default Main;
