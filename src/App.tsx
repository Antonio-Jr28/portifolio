import React from "react";

import { Navbar } from "components/navbar/navbar.component";
import { Home } from "../src/components/home";
import { About } from "components/about";
import { Portfolio } from "components/port-folio/port-folio.component";
import { Technologies } from "components/technologies";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Technologies />
    </div>
  );
};
