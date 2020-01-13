import React, { useEffect, useState } from "react";
import Snap from "snapsvg";

export default function ImageReport({
  id,
  width,
  height,
  withBorder,
  perspective = "FRONT",
  markerX,
  markerY
}) {
  const [border, setBorder] = useState({
    border: "1px solid #c8c8c8",
    borderRadius: "5px"
  });

  const positionCarPerspective = {
    FRONT: {
      image: "car-front.svg",
      posx: 61,
      posy: 20
    }
  };

  useEffect(() => {
    const s = Snap(`#car-report-img-${id}`);
    const { image, posx, posy } = positionCarPerspective[perspective];
    Snap.load(image, f => {
      const path = f.select("path").transform(`t${posx}, ${posy}`);
      s.prepend(path);
    });
    var circle1 = s.circle(markerX, markerY, 15);
    circle1.attr({
      fill: "#D9D2E8"
    });
    var circle2 = s.circle(markerX, markerY, 12);
    circle2.attr({
      fill: "#7859AB"
    });
  }, []);

  return (
    <svg
      id={`car-report-img-${id}`}
      width={width}
      height={height}
      style={withBorder ? border : {}}
    />
  );
}
