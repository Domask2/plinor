import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/Card/card.actions";
import {
  Form,
  Container,
  Button,
  InputGroup,
  FormGroup,
  useAccordionButton
} from "react-bootstrap";
interface CardInputProps {
  childId?: number;
  toggle?: boolean;
}

const stylesForm = {
  width: "80%",
  marginBottom: "20px",
  marginTop: "20px",
};

const CardInput: React.FC<CardInputProps> = ({ childId, toggle }) => {
  const dispatch = useDispatch();

  const decoratedOnClick = useAccordionButton("0");

  const [inputText, setInputText] = useState("");
  const [widthElement, setWidthElement] = useState(0);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addCard({
        newCard: {
          id: Math.random(),
          title: inputText,
          width: widthElement === 0 ? 6 : widthElement,
        },
        childId,
      })
    );

    setInputText("");
    setWidthElement(0);
  };

  return (
    <Container className="d-flex align-itens-center justify-content-center">
      <Form onSubmit={(e) => handleSubmitForm(e)} style={stylesForm}>
        <Form.Group className="" controlId="formGroupText">
          <Form.Label>+ Добавить карточку</Form.Label>
          <FormGroup className="d-flex">
            <InputGroup className="d-flex flex-column">
              <Form.Control
                style={{ width: "98%" }}
                className="mb-2"
                type="text"
                placeholder="Введите имя карточки"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <Form.Select
                style={{ width: "98%" }}
                value={widthElement}
                aria-label="Default select example"
                onChange={(e) => setWidthElement(+e.target.value)}
              >
                <option value={6}>Размер карточки (по умолчанию = 6)</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </Form.Select>
            </InputGroup>

            {!toggle && (
              <Button
                style={{ width: "5%" }}
                type="submit"
                variant="outline-secondary"
                id="button-addon2"
              >
                +
              </Button>
            )}

            {toggle && (
              <Button
                type="submit"
                onClick={decoratedOnClick}
                style={{ width: "20%" }}
                variant="outline-secondary"
                id="button-addon2"
              >
                +
              </Button>
            )}
          </FormGroup>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CardInput;
