import React, { useState } from "react";
import "./styles.css";
//import Svg from "./Svg";
import ImageCarReport from "./ImageCarReport";
import ImageReport from "./ImageReport";

export default function App() {
  const [marker, setMarker] = useState({ x: 15, y: 15 });
  return (
    <div className="App">
      {/*<Svg />*/}
      <div>
        <ImageCarReport
          width={300}
          height={210}
          perspective="FRONT"
          id="img-front"
          onChange={e => setMarker(e)}
        />
      </div>
      <div>
        <ImageReport
          id="report-img"
          width={300}
          height={180}
          withBorder
          perspective="FRONT"
          markerX={marker.x}
          markerY={marker.y}
        />
      </div>
    </div>
  );
}
