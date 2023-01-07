import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type LoopedTextProps = {
  text: string[];
  loopTiming: number; // seconds
};

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    x: 8,
    opacity: 1,
  },
};

function LoopedText(props: LoopedTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === props.text.length) {
        next = 0;
      }
      setIndex(next);
    }, props.loopTiming * 1000);
  }, [index, props, setIndex]);

  return (
    <motion.span
      variants={variants}
      key={index}
      initial="enter"
      animate="center"
      transition={{
        duration: 0.5,
      }}
    >
      {props.text[index]}
    </motion.span>
  );
}

export default LoopedText;
