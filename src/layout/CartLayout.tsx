import React from "react";
import { Container } from "react-bootstrap";

interface CardLayoutProps {
  children: React.ReactNode
}

const styles = {
  backgroundColor: '#f1f1f1',
  height: 'auto',
}

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <Container style={styles} fluid>{children}</Container>
  )
};

export default CardLayout;
