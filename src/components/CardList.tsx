import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Container, Row } from "react-bootstrap";
import CardItem from "./CardItem";

const TodoList: React.FC = () => {
  const cards = useTypedSelector((state) => state.card.card);
  return (
    <Container fluid>
      <Row className="flex-column justify-content-center align-items-center">
        {cards.map((card) => {
          return <CardItem key={card.id} card={card} />;
        })}
      </Row>
    </Container>
  );
};

export default TodoList;
