import React from "react";

import {
  addCardDown,
  addCardUp,
  deleteCard,
} from "../../redux/Card/card.actions";
import { DropdownButton, Dropdown } from "react-bootstrap";

import DropdowmInput from "./DropdowmInput";
import DropDownEditWidth from "./DropDownEditWidth";
import DropDowmItem from "./DropDowmItem";

import styled from "styled-components";

const DropdownButtonStyle = styled(DropdownButton)`
  margin-bottom: 10px;
  background-color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
`;

interface CardDropDownProps {
  id: number;
  childId?: number;
}

const CardDropdown: React.FC<CardDropDownProps> = ({ id, childId }) => {
  return (
    <DropdownButtonStyle
      rootCloseEvent="mousedown"
      id="btnCardDown"
      variant="light"
      title=""
    >
      <Dropdown.ItemText style={{ color: "blue" }}>
        Действия над карточкой
      </Dropdown.ItemText>

      <DropdowmInput id={id} childId={childId} />
      <DropDownEditWidth id={id} childId={childId} />
      <DropDowmItem
        actionFunction={addCardUp({ id, childId })}
        title="Переместить вверх"
      />
      <DropDowmItem
        actionFunction={addCardDown({ id, childId })}
        title="Переместить вниз"
      />
      <DropDowmItem
        actionFunction={deleteCard({ id, childId })}
        title="Удалить"
      />
    </DropdownButtonStyle>
  );
};

export default CardDropdown;
