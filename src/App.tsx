import React from "react";
import CardLayout from "./layout/CartLayout";
import CardInput from "./components/CardInput";
import CardList from "./components/CardList";
import styled from "styled-components";

const CardInputWrapper = styled.div`
  width: 58%;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <CardLayout>
      <CardInputWrapper>
        <CardInput />
      </CardInputWrapper>
      <CardList />
    </CardLayout>
  );
};

export default App;
