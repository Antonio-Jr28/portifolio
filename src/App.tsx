import React from "react";

import { Navbar } from "components/navbar/navbar.component";
import { Home } from "../src/components/home";
import { About } from "components/about";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};
