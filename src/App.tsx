import React from "react";

import CardLayout from './layout/CartLayout';
import CardInput from "./components/CardInput";
import CardList from "./components/CardList";


import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {

  const cards = useTypedSelector((state) => state.card.card);

  console.log(cards)

  return (
    <CardLayout>
      <CardInput />
      <CardList />
    </CardLayout>
  );
}

export default App;
