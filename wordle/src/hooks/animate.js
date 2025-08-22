import { useState } from "react";

export const useAnimation = () => {
  let [runAnimation, setRunAnimation] = useState(false);
  let [colors, setColors] = useState([]);

  return { runAnimation, setRunAnimation, colors, setColors};
};
