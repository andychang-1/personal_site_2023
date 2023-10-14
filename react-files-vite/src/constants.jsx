import Photobook from "routes/photography/photobook";
import Ttc1 from "routes/photography/ttc1";
import Ttc2 from "routes/photography/ttc2";
import Ttc3 from "routes/photography/ttc3";
import TwinksVsDolls from "routes/photography/twinksVsDolls";
import Viscera from "./routes/photography/viscera";

const Constants = {
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
      path: "photo/viscera",
      comp: <Viscera />,
      title: "Viscera - 08/23",
    },
  ],
};
export default Constants;
