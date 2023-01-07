import { faAddressCard, faBriefcase, faDollar, faEnvelope, faFilePen, faHandshake, faHome } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';

import styles from './Menu.module.scss';
import MenuEntry from './MenuEntry';

function Menu() {
  return (
    <Box position="fixed" top={5} zIndex={1} pl={2} pr={2} className={styles.menuContainer}>
      <div className={styles.menu}>
        <MenuEntry title="Home" icon={faHome} />
        <MenuEntry title="Resume" icon={faAddressCard} />
        <MenuEntry title="Portfolio" icon={faBriefcase} />
        <MenuEntry title="Clients" icon={faHandshake} />
        <MenuEntry title="Pricing" icon={faDollar} />
        <MenuEntry title="Contact" icon={faEnvelope} />
        <MenuEntry title="Blog" icon={faFilePen} />
      </div>
    </Box>
  );
}

export default Menu;
