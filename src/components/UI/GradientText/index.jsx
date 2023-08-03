import React from "react";

const GradientText = ({ text, customStyle }) => {
  return (
    <p
      style={{
        background: "linear-gradient(120.27deg, #161535, 10%, #AA8A3A 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      className={customStyle}
    >
      {text}
    </p>
  );
};

export default GradientText;
