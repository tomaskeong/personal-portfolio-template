import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

export type MenuEntryProps = {
  title: string;
  icon: IconProp;
};

const menuItemTitleMotion = {
  rest: { scale: 0, y: 10 },
  hover: { scale: 0.9, y: 40, transition: { bounce: 0 } },
};

function MenuEntry({ title, icon }: MenuEntryProps) {
  return (
    <>
      <motion.div className={`${styles.menuItem}`} initial="rest" whileHover="hover">
        <div className={styles.iconContainer}>
          <motion.div variants={menuItemTitleMotion} className={styles.pill}>
            {title.toUpperCase()}
          </motion.div>
          <FontAwesomeIcon icon={icon} size="sm" />
        </div>
      </motion.div>
    </>
  );
}

export default MenuEntry;
