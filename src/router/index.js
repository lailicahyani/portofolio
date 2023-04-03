import { Navigate, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import About from "../pages/About";
import Educations from "../pages/Education";
import Experiance from "../pages/Experiance";
import Skils from "../pages/Skils";
import Interest from "../pages/Interest";
import Awards from "../pages/Awards";

export default class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<Navigate to="/about" replace />} />
        <Route index element={<About />} path="/about" />
        <Route element={<Educations />} path="/educations" />
        <Route element={<Experiance />} path="/experiance" />
        <Route element={<Skils />} path="/skills" />
        <Route element={<Interest />} path="/interest" />
        <Route element={<Awards />} path="/awards" />
      </Routes>
    );
  }
}
