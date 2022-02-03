import React from "react";

import { addCardDown, addCardUp, deleteCard } from "../../redux/Card/card.actions";
import {
  DropdownButton,
  Dropdown
} from "react-bootstrap";

import DropdowmInput from "./DropdowmInput";
import DropDownEditWidth from "./DropDownEditWidth";
import DropDowmItem from "./DropDowmItem";

interface CardDropDownProps {
  id: number
  width: number;
  title: string;
  childId?: number
}

const CardDropdown: React.FC<CardDropDownProps> = ({id, width, title, childId }) => {
  return (
    <DropdownButton
      style={{ marginBottom: "10px", backgroundColor:'white', position: 'absolute', top: '10px', right: '10px', padding: '0'  }}
      rootCloseEvent="mousedown"
      id="btnCardDown"
      variant="light"
      title=''
    >
      <Dropdown.ItemText style={{ color: "blue" }}>Действия над карточкой</Dropdown.ItemText>

      <DropdowmInput id={id}  childId={childId}/>
      <DropDownEditWidth id={id} childId={childId}/>
      <DropDowmItem actionFunction={addCardUp({id, childId})} title='Переместить вверх' />
      <DropDowmItem actionFunction={addCardDown({id, childId})} title='Переместить вниз' />
      <DropDowmItem actionFunction={deleteCard({id, childId})} title='Удалить' />
    </DropdownButton>
  );
};

export default CardDropdown;
