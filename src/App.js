import React from "react";
import "./styles.css";
//import Svg from "./Svg";
import ImageCarReport from "./ImageCarReport";
import ImageReport from "./ImageReport";

export default function App() {
  return (
    <div className="App">
      {/*<Svg />*/}
      <div>
        <ImageCarReport
          width={300}
          height={210}
          perspective="FRONT"
          id="img-front"
        />
      </div>
      <div>
        <ImageReport
          width={300}
          height={180}
          withBorder
          perspective="FRONT"
          id="report-img"
          markerX={230}
          markerY={62}
        />
      </div>
    </div>
  );
}
