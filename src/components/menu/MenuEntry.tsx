import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, Variants } from 'framer-motion';

import styles from './Menu.module.scss';

export type MenuEntryProps = {
  title: string;
  icon: IconProp;
};

const menuItemTitleMotion: Variants = {
  rest: { scale: 0, y: 10 },
  hover: { scale: 0.9, y: 45, transition: { duration: 0.2 } },
};

function MenuEntry({ title, icon }: MenuEntryProps) {
  return (
    <>
      <motion.div className={`${styles.menuItem}`} initial="rest" whileHover="hover">
        <div className={styles.iconContainer}>
          <motion.div variants={menuItemTitleMotion} className={styles.pill}>
            {title.toUpperCase()}
          </motion.div>
          <FontAwesomeIcon icon={icon} style={{ fontSize: '18px' }} />
        </div>
      </motion.div>
    </>
  );
}

export default MenuEntry;
