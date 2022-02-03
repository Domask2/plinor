import React from 'react';
import {Accordion, Card, Button } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

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

const CardAccordion = ({children} : any) => {
  return (
    <Accordion style={{width: '70%', textAlign: 'center', marginBottom: '20px' }}>
    <Card>
      <Card.Header>
      <CustomToggle eventKey="0">Добавить карточку</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {children}
        </Card.Body>
      </Accordion.Collapse>
    </Card>

  </Accordion>
  )
};

export default CardAccordion;
