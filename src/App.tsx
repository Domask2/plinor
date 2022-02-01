import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./redux/store";

const App = () => {

  const carts = useSelector<RootState>((state) => state.cart.cart);

  console.log(carts)

  return (
    <div className="App">
 
    </div>
  );
}

export default App;
