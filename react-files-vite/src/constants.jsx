// @flow
import * as React from "react";

import {
  Viscera,
  TwinksVsDolls,
  Ttc1,
  Ttc2,
  Ttc3,
  Photobook,
} from "routes/photography";

import {
  CadoShelves,
  JpToolbox,
  BigFrame,
  BroomHanger,
  DoorHangerBracket,
  DraftingTable,
  HatRack,
  HeadBoard2,
  Stoops,
  Poster,
  Etc,
} from "routes/furniture";
import { FryeBoots } from "routes/clothing.jsx";

type mapEntry = {
  comp: ?React.Node,
  path: string,
  title: string,
};

const Constants: { [string]: Array<mapEntry> } = {
  PHOTO_SECTION_MAPPING: [
    {
      path: "photo/viscera",
      comp: <Viscera />,
      title: "Viscera - 08/23",
    },
    {
      path: "photo/ttc3",
      comp: <Ttc3 />,
      title: "Things to Come III - 07/2023",
    },
    {
      path: "photo/twinks_vs_dolls_2",
      comp: <TwinksVsDolls />,
      title: "Twinks vs Dolls II - 06/2023",
    },
    {
      path: "photo/ttc2",
      comp: <Ttc2 />,
      title: "Things to Come II - 05/2023",
    },
    {
      path: "photo/ttc1",
      comp: <Ttc1 />,
      title: "Things to Come I - 03/2023",
    },
    {
      path: "photo/kates_show",
      comp: null,
      title: "Kates Show - 04/2023",
    },
    {
      path: "photo/book2020",
      comp: <Photobook />,
      title: "photobook - 2019 - 2020",
    },
  ],
  FURNITURE_SECTION_MAPPING: [
    {
      path: "furniture/bigframe",
      comp: <BigFrame />,
      title: "Big picture frame - 2023",
    },
    {
      path: "furniture/shelves",
      comp: <BroomHanger />,
      title: "Broomhanger - 2023",
    },
    {
      path: "furniture/doorhangerbracket",
      comp: <DoorHangerBracket />,
      title: "Door Hanger Bracket - 2023",
    },
    {
      path: "furniture/hatrack",
      comp: <HatRack />,
      title: "Hat Rack - 2023",
    },
    {
      path: "furniture/poster",
      comp: <Poster />,
      title: "Poster - 2023",
    },
    {
      path: "furniture/draftingtable",
      comp: <DraftingTable />,
      title: "Drafting Table - 2021",
    },
    {
      path: "furniture/headboard2",
      comp: <HeadBoard2 />,
      title: "Headboard II - 2021",
    },

    {
      path: "furniture/jptoolbox",
      comp: <JpToolbox />,
      title: "Japanese woodworking toolbox - 2019",
    },
    {
      path: "furniture/etc",
      comp: <Etc />,
      title: "etcetera projects",
    },
  ],
  CLOTHES_SECTION_MAPPING: [
    {
      path: "clothes/fryeboots1",
      comp: <FryeBoots />,
      title: "Frye boots I - 2023",
    },
    {
      path: "clothes/perfumecase",
      comp: null,
      title: "Perfume Case - 2023",
    },
    {
      path: "clothes/gimpmask",
      comp: null,
      title: "Gimp Mask - 2022",
    },
    {
      path: "clothes/converse",
      comp: null,
      title: "Fidlock Converse - 2022",
    },
    {
      path: "clothes/justhood",
      comp: null,
      title: "Just Hood - 2019",
    },
    {
      path: "clothes/airpodscase",
      comp: null,
      title: "Airpods Case - 2019",
    },
  ],
  MISC_SECTION_MAPPING: [
    {
      path: "misc/sukireupholster",
      comp: <FryeBoots />,
      title: "Reupholstering Motorcycle Seat - 2022",
    },
  ],
};

export default Constants;
