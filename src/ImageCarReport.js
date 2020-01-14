import React, { useEffect, useState } from "react";
import Snap from "snapsvg";

export default function ImageCarReport({
  id,
  width,
  height,
  withBorder,
  perspective = "FRONT",
  onChange,
  markerX,
  markerY,
  markerRadio,
  posX,
  posY
}) {
  const [border, setBorder] = useState({
    border: "1px solid #c8c8c8",
    borderRadius: "5px"
  });

  const positionCarPerspective = {
    FRONT: {
      image: "car-front.svg",
      posX: posX,
      posY: posY
    }
  };

  const parsePosition = (centerX, centerY, position) => {
    const [posX, posY] = position.replace("t", "").split(",");
    const [x, y] = [parseInt(posX, 10) + centerX, parseInt(posY, 10) + centerY];
    //console.log(x, y, width, height);
    onChange({ x, y });
  };

  useEffect(() => {
    const s = Snap(`#report-img-${id}`);
    const { image, posX, posY } = positionCarPerspective[perspective];
    Snap.load(image, f => {
      const path = f.select("path").transform(`t${posX}, ${posY}`);
      s.prepend(path);
    });
    var circle1 = s.circle(markerX, markerY, markerRadio);
    circle1.attr({
      fill: "#D9D2E8",
      "fill-opacity": 0.5
    });
    var circle2 = s.circle(markerX, markerY, markerRadio - 4);
    circle2.attr({
      fill: "#7859AB"
    });
    var group = s.group(circle1, circle2);
    group.drag(
      function(dx, dy, posx, posy) {
        this.attr({
          transform:
            this.data("origTransform") +
            (this.data("origTransform") ? "T" : "t") +
            [dx, dy]
        });
      },
      function() {
        this.data("origTransform", this.transform().local);
      },
      function() {
        //console.log("finished dragging");
        const position = this.transform().global;
        //console.log(position);
        parsePosition(markerX, markerY, position);
      }
    );
  }, []);

  return (
    <svg
      id={`report-img-${id}`}
      width={width}
      height={height}
      style={withBorder ? border : {}}
    />
  );
}
