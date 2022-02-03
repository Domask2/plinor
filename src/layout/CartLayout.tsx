import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

interface CardLayoutProps {
  children: React.ReactNode;
}

const ContainerBG = styled.div`
  background-image: url('img/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: auto;
`;

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <ContainerBG>
      {children}
    </ContainerBG>
  );
};

export default CardLayout;
