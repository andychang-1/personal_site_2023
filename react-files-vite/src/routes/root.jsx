import React from "react";
import { Outlet } from "react-router-dom";
import {
  photoSection,
  furnitureSection,
  clothes,
  resume,
  socials,
} from "routes";

const nameBar = (
  <div id="namebar">
    <a href={`/`}>Andy Changs site</a>
  </div>
);

export default function Root() {
  return (
    <>
      <div id="rightbar">
        {nameBar}
        <ul>
          <li>{photoSection}</li>
          <li>{furnitureSection}</li>
          <li>{clothes}</li>
          <li>{resume}</li>
          <li>{socials}</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
