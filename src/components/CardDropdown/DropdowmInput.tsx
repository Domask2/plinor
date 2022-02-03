import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { FormGroup, Form, Button, Dropdown } from "react-bootstrap";
interface DropdownInputProps {
  id: number;
  childId?: number;
}

const DropdowmInput: React.FC<DropdownInputProps> = ({ id, childId }) => {
  const { addEditNameCard } = useActions();
  const [inputText, setInputText] = useState("");

  const handlerAddEditNameCard = () => {
    if(inputText === '') return

    addEditNameCard({ title: inputText, id, childId });
    setInputText("");
  };

  return (
    <Form.Group className="d-flex mb-2" controlId="formGroupText">
      <FormGroup className="d-flex">
        <Form.Control
          style={{ width: "88%", marginLeft: "4px" }}
          type="text"
          placeholder="изменить имя"
          value={inputText}
          isInvalid={inputText === ""}
          onChange={(e) => setInputText(e.target.value)}
        />

        <Dropdown.Item
          style={{width: '0', padding: '0'}}
        > 
          <Button
            style={{ padding: "5px", marginLeft: "5px" }}
            type="submit"
            variant="outline-secondary"
            id="button-addon2"
            onClick={handlerAddEditNameCard}
          >
            +
          </Button>
        </Dropdown.Item>
      </FormGroup>
    </Form.Group>
  );
};

export default DropdowmInput;
