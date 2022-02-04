import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
interface DropDowmItemProps {
  actionFunction: any;
  title: string
}

const DropDowmItem: React.FC<DropDowmItemProps> = ({ actionFunction, title }) => {
  const dispatch = useDispatch();

  return (
    <Dropdown.Item as="button" onClick={() => dispatch(actionFunction)}>
      {title}
    </Dropdown.Item>
  );
};

export default DropDowmItem;
