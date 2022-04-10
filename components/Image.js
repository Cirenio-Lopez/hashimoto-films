import React from "react";
import { motion } from "framer-motion";
const Image = ({ src, fallback, type = "image/webp", alt }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <motion.img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
