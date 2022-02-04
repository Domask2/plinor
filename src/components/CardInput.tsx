import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import {
  Form,
  Container,
  Button,
  InputGroup,
  FormGroup,
  useAccordionButton,
} from "react-bootstrap";
import styled from "styled-components";

const FormStyle = styled(Form)`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ButtonStyle = styled(Button)`
  width: 20%;
  background-color: #ffffff3d;
  color: white;
  border: none;
  &:hover {
    background-color: #cecece3c;
    border: none;
  }
`;
interface CardInputProps {
  childId?: number;
  toggle?: boolean;
}

const CardInput: React.FC<CardInputProps> = ({ childId, toggle }) => {
  const { addCard } = useActions();
  const decoratedOnClick = useAccordionButton("0");

  const [inputText, setInputText] = useState("");
  const [widthElement, setWidthElement] = useState(0);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputText === "") {
      return;
    }

    addCard({
      newCard: {
        id: Math.random(),
        title: inputText,
        width: widthElement === 0 ? 6 : widthElement,
      },
      childId,
    });

    setInputText("");
    setWidthElement(0);
  };

  return (
    <Container className="d-flex align-itens-center justify-content-center">
      <FormStyle
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmitForm(e)}
      >
        <Form.Group className="" controlId="formGroupText">
          <FormGroup className="d-flex">
            <InputGroup className="d-flex flex-column">
              <Form.Control
                style={{ width: "90%" }}
                className="mb-2"
                type="text"
                placeholder="Введите имя карточки"
                value={inputText}
                isInvalid={inputText === ""}
                onChange={(e) => setInputText(e.target.value)}
              />
              <Form.Select
                style={{ width: "90%" }}
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
              <ButtonStyle
                type="submit"
                variant="outline-dark"
                id="button-addon2"
              >
                Добавить карточку
              </ButtonStyle>
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
      </FormStyle>
    </Container>
  );
};

export default CardInput;
