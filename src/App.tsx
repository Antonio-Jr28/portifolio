import React from "react";

import { Navbar } from "components/navbar/navbar.component";
import { Home } from "../src/components/home";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};
