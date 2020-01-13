import React from "react";
import "./styles.css";
//import Svg from "./Svg";
import ImageCarReport from "./ImageCarReport";

export default function App() {
  return (
    <div className="App">
      {/*<Svg />*/}
      <ImageCarReport width={300} height={210} withBorder perspective="FRONT" />
    </div>
  );
}
