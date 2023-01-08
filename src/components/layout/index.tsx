import { motion } from 'framer-motion';
import useDocTitle from 'hooks/useDocTitle';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const layoutVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function Layout({ children, title }: LayoutProps) {
  useDocTitle(title);
  return (
    <motion.div
      className="page-container"
      variants={layoutVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  );
}
