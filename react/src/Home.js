import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="services">We are offering the following services</Link>
      <Link to="contact">You can contact us by submitting form</Link>
    </div>
  );
}
