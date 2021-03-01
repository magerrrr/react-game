import React, { useEffect } from "react";

export const useKey = (key, cb) => {
  useEffect(() => {
    const handle = (event) => {
      if (event.code === key) {
        cb();
      }
    };

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [key, cb]);
};

export const KEYS = {
  Q: "KeyQ",
  W: "KeyW",
  A: "KeyA",
  R: "KeyR",
  SPACE: "Space",
  ESCAPE: "Escape",
};
