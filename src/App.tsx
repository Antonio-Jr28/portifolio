import React from "react";

import { Navbar } from "components/navbar/navbar.component";
import { Home } from "../src/components/home";
import { About } from "components/about";
import { Portfolio } from "components/port-folio/port-folio.component";
import { Technologies } from "components/technologies";
import { Experiences } from "components/experiences";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />

      <div className="mt-[120px]" />
      <Portfolio />

      <div className="mt-[120px]" />
      <Technologies />

      <div className="mt-[120px]" />
      <Experiences />
    </div>
  );
};
