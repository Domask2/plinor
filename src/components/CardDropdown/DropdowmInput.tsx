import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEditNameCard } from "../../redux/Card/card.actions";
import { Dropdown, Form, Button } from "react-bootstrap";
interface DropdownInputProps {
  id: number;
  childId?: number;
}

const DropdowmInput: React.FC<DropdownInputProps> = ({ id, childId }) => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  return (
    <Form.Group className="d-flex mb-2" controlId="formGroupText">
      <Form.Control
        className="mb-2"
        type="text"
        placeholder="изменить имя"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <Dropdown.Item style={{ width: "20px", padding: "2px 5px" }}>
        <Button
          style={{ padding: "2px" }}
          type="submit"
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            dispatch(addEditNameCard({ title: inputText, id, childId }));
            setInputText("");
          }}
        >
          +
        </Button>
      </Dropdown.Item>
    </Form.Group>
  );
};

export default DropdowmInput;
