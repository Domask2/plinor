import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { FormGroup, Form, Button } from "react-bootstrap";
interface DropdownInputProps {
  id: number;
  childId?: number;
}

const DropdowmInput: React.FC<DropdownInputProps> = ({ id, childId }) => {
  const { addEditNameCard } = useActions();
  const [inputText, setInputText] = useState("");

  const handlerAddEditNameCard = () => {
    addEditNameCard({ title: inputText, id, childId });
    setInputText("");
  };

  return (
    <Form onSubmit={handlerAddEditNameCard}>
      <Form.Group className="d-flex mb-2" controlId="formGroupText">
        <FormGroup className="d-flex">
          <Form.Control
            style={{ width: "100%", marginLeft: "4px" }}
            type="text"
            placeholder="изменить имя"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <Button
            style={{ padding: "5px", marginLeft: "5px" }}
            type="submit"
            variant="outline-secondary"
            id="button-addon2"
          >
            +
          </Button>
        </FormGroup>
      </Form.Group>
    </Form>
  );
};

export default DropdowmInput;
