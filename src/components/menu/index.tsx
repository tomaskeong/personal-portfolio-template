import { faBriefcase, faDollar, faEnvelope, faFilePen, faHandshake, faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';

import styles from './Menu.module.scss';
import MenuEntry from './MenuEntry';

function Menu() {
  return (
    <Box position="fixed" top={5} zIndex={1} pl={2} pr={2} className={styles.menuContainer}>
      <div className={styles.menu}>
        <MenuEntry title="Home" icon={faHome} url="/" />
        <MenuEntry title="About" icon={faUserAlt} url="/about" />
        <MenuEntry title="Portfolio" icon={faBriefcase} url="/portfolio" />
        <MenuEntry title="Clients" icon={faHandshake} url="/clients" />
        <MenuEntry title="Pricing" icon={faDollar} url="/pricing" />
        <MenuEntry title="Contact" icon={faEnvelope} url="/contact" />
        <MenuEntry title="Blog" icon={faFilePen} url="/blog" />
      </div>
    </Box>
  );
}

export default Menu;
