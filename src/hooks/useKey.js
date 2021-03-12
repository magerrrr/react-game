import React, { useEffect } from "react";

export const useKey = (key, cb) => {
  useEffect(() => {
    const handle = (event) => {
      if (event.code === key) {
        cb();
      }
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
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
  { key: "Q", description: "Pick paper" },
  { key: "W", description: "Pick scissors" },
  { key: "A", description: "Pick rock" },
  { key: "Space", description: "Play again" },
  { key: "R", description: "Show rules" },
  { key: "Escape", description: "Hide rules" },
  { key: "Y", description: "Reset score" },
];
