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
          markerX={150}
          markerY={180}
          markerRadio={15}
          posX={61}
          posY={20}
        />
      </div>
      <div>
        <ImageReport
          id="report-img-1"
          width={300}
          height={180}
          withBorder
          perspective="FRONT"
          markerX={marker.x}
          markerY={marker.y}
          markerRadio={15}
          posX={61}
          posY={20}
        />
      </div>
      <div>
        <ImageReport
          id="report-img-2"
          width={300}
          height={180}
          withBorder
          perspective="FRONT"
          markerX={marker.x}
          markerY={marker.y}
          markerRadio={13}
          scale={0.5}
          posX={-30}
          posY={-50}
        />
      </div>
      <div
        style={{
          width: 111,
          height: 111,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #c8c8c8",
          borderRadius: "5px",
          margin: "auto"
        }}
      >
        <ImageReport
          id="report-img-3"
          width={300}
          height={180}
          perspective="FRONT"
          markerX={marker.x}
          markerY={marker.y}
          markerRadio={13}
          scale={0.5}
          posX={-30}
          posY={-50}
          styles={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-19px"
          }}
        />
      </div>
    </div>
  );
}
