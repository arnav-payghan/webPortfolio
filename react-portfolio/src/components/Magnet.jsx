import { useState, useEffect, useRef } from "react";
import "../componentsCSS/Magnet.css";

const Magnet = ({
  children,
  padding = 120, // optional: increases activation zone
  disabled = false,
  magnetStrength = -4, // stronger attraction
  activeTransition = "transform 0.1s ease-out",
  inactiveTransition = "transform 0.3s ease-in-out",
  wrapperClassName = "wrapper",
  innerClassName = "text",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: transitionStyle,
        willChange: "transform",
        display: "inline-block",
      }}
      {...props}
    >
      <div className={innerClassName}>{children}</div>
    </div>
  );
};

export default Magnet;
