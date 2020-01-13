import React, { useEffect, useState } from "react";
import Snap from "snapsvg";

export default function ImageCarReport({
  width,
  height,
  withBorder,
  perspective = "FRONT"
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

  const parsePosition = (centerX, centerY, position) => {
    const [posX, posY] = position.replace("t", "").split(",");
    const [x, y] = [parseInt(posX, 10) + centerX, parseInt(posY, 10) + centerY];
    console.log(x, y);
  };

  useEffect(() => {
    const s = Snap("#svg");
    const { image, posx, posy } = positionCarPerspective[perspective];
    Snap.load(image, f => {
      const path = f.select("path").transform(`t${posx}, ${posy}`);
      s.prepend(path);
    });
    var circle1 = s.circle(150, 180, 15);
    circle1.attr({
      fill: "#D9D2E8"
    });
    var circle2 = s.circle(150, 180, 12);
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
        console.log("finished dragging");
        const position = this.transform().global;
        parsePosition(width, height, position);
      }
    );
  }, []);

  return (
    <svg
      id="svg"
      width={width}
      height={height}
      style={withBorder ? border : {}}
    />
  );
}
