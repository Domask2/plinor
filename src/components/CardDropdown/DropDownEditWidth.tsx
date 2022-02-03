import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { editWidthCard } from "../../redux/Card/card.actions";
import { useDispatch } from "react-redux";

interface DropDownEditWidthProps {
  id: number;
  childId?: number;
}

const DropDownEditWidth: React.FC<DropDownEditWidthProps> = ({
  id,
  childId,
}) => {
  const dispatch = useDispatch();

  return (
    <DropdownButton
      className="d-flex align-items-center justify-content-center"
      variant="light"
      title="Изменить размер карточки"
      onSelect={(e) => dispatch(editWidthCard({ width: e, id, childId }))}
    >
      <Dropdown.Item eventKey="4">4</Dropdown.Item>
      <Dropdown.Item eventKey="6">6</Dropdown.Item>
      <Dropdown.Item eventKey="8">8</Dropdown.Item>
      <Dropdown.Item eventKey="10">10</Dropdown.Item>
      <Dropdown.Item eventKey="12">12</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDownEditWidth;
