import React from 'react';
import {Accordion, Card, Button } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import styled from "styled-components";

function CustomToggle({ children, eventKey }: any) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Button
      variant="outline-secondary"
      id="button-addon2"
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

const AccordionStyle = styled(Accordion)`
  width: 100%;
  text-align: center; 
  margin-bottom: 20px; 
`;

const CardStyle = styled(Card)`
  border: none;
`;

const CardHeaderStyle = styled(Card.Header)`
  background-color:#ebecf0;
  border: none;
`; 

const CardAccordion = ({children} : any) => {
  return (
    <AccordionStyle >
    <CardStyle>
      <CardHeaderStyle >
      <CustomToggle eventKey="0">Добавить карточку</CustomToggle>
      </CardHeaderStyle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {children}
        </Card.Body>
      </Accordion.Collapse>
    </CardStyle>

  </AccordionStyle>
  )
};

export default CardAccordion;
