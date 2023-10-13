import React from "react";
import "./App.css";

import { Link, Route } from "wouter";

export default function App() {
  return (
    <div>
      <Link href="/users/1">
        <a className="link">Profile2</a>
      </Link>
      <Route path="/about">About Us</Route>
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
    </div>
  );
}
