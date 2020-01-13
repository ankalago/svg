import React, { useEffect } from "react";
import "./styles.css";
import Snap from "snapsvg";

export default function Svg() {
  useEffect(() => {
    const s = Snap(300, 212);
    Snap.load("car-front.svg", f => {
      s.prepend(f.select("path"));
    });
    var circle1 = s.circle(126, 156, 15);
    circle1.attr({
      fill: "#D9D2E8"
    });
    var circle2 = s.circle(126, 156, 12);
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
        console.log(posx + 24, posy + 24);
      },
      function() {
        this.data("origTransform", this.transform().local);
      },
      function(e) {
        console.log("finished dragging");
      }
    );
  }, []);
  return <></>;
}
