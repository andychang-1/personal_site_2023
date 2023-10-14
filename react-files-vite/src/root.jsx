import React from "react";
import { Outlet } from "react-router-dom";

import Constants from "./constants";

const nameBar = (
  <div id="namebar">
    <a href={`/`}>Andy Changs site</a>
  </div>
);

export const furnitureSection = (
  <>
    <b>(2) furniture</b>
    <ul>
      <li>
        <a href={`/furniture/shelves`}>cado / frama shelves - 2021 </a>
      </li>
      <li>
        <a href={`/furniture/stoops`}>stoops - 2021- </a>
      </li>
    </ul>
  </>
);

export const clothes = <b> clothes</b>;

export const resume = <b> resume</b>;

export const socials = <b> socials + contact</b>;

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
