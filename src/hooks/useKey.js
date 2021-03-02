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
  Y: "KeyY",
  SPACE: "Space",
  ESCAPE: "Escape",
};

export const keyboardShortcuts = [
  { key: KEYS.Q, description: "Pick paper" },
  { key: KEYS.W, description: "Pick scissors" },
  { key: KEYS.A, description: "Pick rock" },
  { key: KEYS.SPACE, description: "Play again" },
  { key: KEYS.R, description: "Show rules" },
  { key: KEYS.Y, description: "Reset score" },
];
