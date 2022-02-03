import React from "react";
import { Col, Card } from "react-bootstrap";

import { ICard } from "../redux/Card/card.types";
import CardAccordion from "./CardDropdown/CardAccordion";
import CardDropdown from "./CardDropdown/CardDropdown";
import CardInput from "./CardInput";

import styled from "styled-components";
interface CardItemProps {
  card: ICard;
}

const CardStyle = styled(Card)`
  height: auto;
  margin-bottom: 25px;
  padding: 10px;
  background-color: #ebecf0;
  border-radius: 3px;
  position: relative;
`;

const Text = styled.p`
  font-size: 20px;
  margin-right: 30px;
  position: relative;
`;

const Divider = styled.div`
  position: absolute;
  left: 0;
  top: 51px;
  width: 100%;
  height: 1px;
  background-color: gray;
`;

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  const { id, title, width } = card;

  return (
    <Col xs={width}>
      <CardStyle className="d-flex align-items-center justify-content-center">
        <Text> {title} </Text>
        <Divider/>
        <CardDropdown id={id} />

        <CardAccordion>
          <CardInput toggle={true} childId={id} />
        </CardAccordion>

        {card.array &&
          card.array?.length > 0 &&
          card.array.map((item: any) => {
            return (
              <Col xs={item.width} key={item.id}>
                <CardStyle className="d-flex align-items-center  justify-content-center">
                  <Text> {item.title}</Text>
                  <CardDropdown id={id} childId={item.id} />
                </CardStyle>
              </Col>
            );
          })}
      </CardStyle>
    </Col>
  );
};

export default CardItem;
