import React from "react";

export const renderRules = (array) => {
  return array.map(({ key, description }) => {
    return (
      <div className="footer__item" key={`${key}${description}`}>
        <button>{key}</button>
        <span>{description}</span>
      </div>
    );
  });
};
