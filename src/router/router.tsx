import React from "react";

import { HomePage } from "pages/home.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const MyRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
};