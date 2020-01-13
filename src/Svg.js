import React, { useEffect } from "react";
import "./styles.css";
import Snap from "snapsvg";

export default function Svg() {
  const parsePosition = (centerX, centerY, position) => {
    const [posX, posY] = position.replace("t", "").split(",");
    const [x, y] = [parseInt(posX, 10) + centerX, parseInt(posY, 10) + centerY];
    console.log(x, y);
  };

  useEffect(() => {
    const s = Snap(300, 190);
    Snap.load("car-front.svg", f => {
      const path = f.select("path").transform("t61, 20");
      s.prepend(path);
    });
    var circle1 = s.circle(150, 170, 15);
    circle1.attr({
      fill: "#D9D2E8"
    });
    var circle2 = s.circle(150, 170, 12);
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
        parsePosition(150, 180, position);
      }
    );
  }, []);
  return <></>;
}
