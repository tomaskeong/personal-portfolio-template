import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Menu.module.scss';

export type MenuEntryProps = {
  title: string;
  icon: IconProp;
  url: string;
};

const menuItemTitleMotion: Variants = {
  rest: { scale: 0, y: 10 },
  hover: { scale: 0.9, y: 46, transition: { duration: 0.2 } },
};

function MenuEntry({ title, icon, url }: MenuEntryProps) {
  const router = useRouter();

  return (
    <>
      <motion.div className={`${styles.menuItem} ${router.pathname === url ? styles.active : ''}`} initial="rest" whileHover="hover">
        <Link href={url} scroll={false}>
          <div className={styles.iconContainer}>
            <motion.div variants={menuItemTitleMotion} className={styles.pill}>
              {title.toUpperCase()}
            </motion.div>
            <FontAwesomeIcon icon={icon} style={{ fontSize: '18px' }} />
          </div>
        </Link>
      </motion.div>
    </>
  );
}

export default MenuEntry;
