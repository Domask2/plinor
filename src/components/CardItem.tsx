import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Col, Card } from "react-bootstrap";

import { ICard } from "../redux/Card/card.types";
import CardDropdown from "./CardDropdown/CardDropdown";

interface CardItemProps {
  card: ICard;
}

const style = {
  height: "auto",
  marginBottom: "25px",
  padding: "10px",
  backgroundColor: "#e3e3e3",
};

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  const { id, title, width } = card;

  return (
    <Col xs={width}>
      <Card
        style={style}
        className="d-flex align-items-center  justify-content-center"
      >
        <p style={{ marginRight: "30px" }}> {title}</p>

        <CardDropdown id={id} width={width} title={title} />

        {card.array &&
          card.array?.length > 0 &&
          card.array.map((item: any) => {
            return (
              <Col xs={item.width}>
                <Card
                  style={style}
                  className="d-flex align-items-center  justify-content-center"
                >
                  <p style={{ marginRight: "30px" }}> {item.title}</p>
                  <CardDropdown id={id} width={width} title={title} childId={item.id}/>
                </Card>
              </Col>
            );
          })}
      </Card>
    </Col>
  );
};

export default CardItem;
