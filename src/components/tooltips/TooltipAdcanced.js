import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal/Portal";

const TooltipAdcanced = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    height: 0,
    weight: 0,
  });

  const handleOnMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} unmountOnExit classNames="fade" timeout={300}>
        {(status) => (
          <Portal visible={status !== "exited"}>
            <p
              className="inline-block absolute p-3 text-white -translate-x-1/2 -translate-y-full bg-black rounded-xl max-w-[200px]"
              style={{
                top: coords.top - coords.height / 2 + window.screenY,
                left: coords.left + coords.width / 2,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdcanced;
