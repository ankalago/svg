import React, { useEffect, useState } from "react";
import Snap from "snapsvg";

export default function ImageReport({
  id,
  width,
  height,
  withBorder,
  perspective = "FRONT",
  markerX,
  markerY,
  markerRadio,
  posX,
  posY,
  scale = 1
}) {
  const [border, setBorder] = useState({
    border: "1px solid #c8c8c8",
    borderRadius: "5px"
  });

  const positionCarPerspective = {
    FRONT: {
      image: "car-front.svg",
      posx: posX * scale,
      posy: posY * scale,
      scale: scale
    }
  };

  useEffect(() => {
    const s = Snap(`#car-report-img-${id}`);
    s.clear();
    const { image, posx, posy } = positionCarPerspective[perspective];
    Snap.load(image, f => {
      const path = f.select("path").transform(`T${posx}, ${posy} s${scale}`);
      s.prepend(path);
    });
    var circle1 = s.circle(markerX * scale, markerY * scale, markerRadio);
    circle1.attr({
      fill: "#D9D2E8"
    });
    var circle2 = s.circle(markerX * scale, markerY * scale, markerRadio - 4);
    circle2.attr({
      fill: "#7859AB"
    });
  });

  return (
    <svg
      id={`car-report-img-${id}`}
      width={width * scale}
      height={height * scale}
      style={withBorder ? border : {}}
    />
  );
}
