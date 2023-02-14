import React from "react";
import "./Button.styles.scss";

const Button_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${Button_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
