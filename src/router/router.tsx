import React from "react";

import { HomePage } from "pages/home.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "pages/about.page";
import { PortfolioPage } from "pages/port-folio.pae";
import { TechnologiesPage } from "pages/technologies.page";
import { ExperiencesPage } from "pages/experiences.page";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/portifolio" element={<PortfolioPage />} />
        <Route path="/tecnologias" element={<TechnologiesPage />} />
        <Route path="/experiencias" element={<ExperiencesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
