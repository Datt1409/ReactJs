import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="root">
      <Header />
      <Outlet />
      <SignUp />
      <Footer />
    </div>
  );
}
