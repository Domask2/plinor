import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

interface CardLayoutProps {
  children: React.ReactNode;
}

const ContainerBG = styled(Container)`
  background-image: url('img/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <ContainerBG fluid>
      {children}
    </ContainerBG>
  );
};

export default CardLayout;
