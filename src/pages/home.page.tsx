import React from "react";

import { Navbar } from "components/navbar/navbar.component";
import { About } from "components/about";
import { Portfolio } from "components/port-folio/port-folio.component";
import { Technologies } from "components/technologies";
import { Experiences } from "components/experiences";
import { Home } from "components/home";

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Technologies />
            <Experiences />
        </div>
    )
}