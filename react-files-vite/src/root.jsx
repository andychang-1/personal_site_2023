import React from "react";
import { Outlet } from "react-router-dom";

import Constants from "./constants";

const nameBar = (
  <div id="namebar">
    <a href={`/`}>Andy Changs site</a>
  </div>
);

export const resume = <b>resume</b>;

export const socials = <b>socials + contact</b>;

export default function Root() {
  return (
    <>
      <div id="rightbar">
        {nameBar}
        <ul>
          <li>
            {generateSubSection(
              "(1) photography",
              Constants.PHOTO_SECTION_MAPPING
            )}
          </li>
          <li>
            {generateSubSection(
              "(2) furniture",
              Constants.FURNITURE_SECTION_MAPPING
            )}
          </li>
          <li>
            {generateSubSection(
              "(3) clothes",
              Constants.CLOTHES_SECTION_MAPPING
            )}
          </li>
          <li>{resume}</li>
          <li>{socials}</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

function generateSubSection(title, mapping) {
  return (
    <>
      <b>{title}</b>
      <ul>
        {mapping.map((obj) => (
          <li key={obj.path}>
            <a key={obj.path} href={"/" + obj.path}>
              {obj.title}{" "}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
