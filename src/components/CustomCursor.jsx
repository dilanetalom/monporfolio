import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="pointer-events-none fixed w-6 h-6 bg-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out mix-blend-screen"
    ></div>
  );
}

export default CustomCursor;
