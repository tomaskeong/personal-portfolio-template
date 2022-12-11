import '@styles/globals.scss';
import '@styles/app.scss';
import '@styles/style.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Footer from '@components/footer';
import Menu from '@components/menu';
import MenuEntry from '@components/menu/MenuEntry';
import { config } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
config.autoAddCss = false;
import { faBriefcase, faEnvelope, faFilePen, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';

const ThemeSwitch = dynamic(() => import('@components/theme-switch/index'), {
  ssr: false,
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <motion.div animate />
      <section className="top-overlay" />
      <header>
        <Menu>
          <MenuEntry title="Home" icon={faHome} />
          <MenuEntry title="About" icon={faUser} />
          <MenuEntry title="Portfolio" icon={faBriefcase} />
          <MenuEntry title="Contact" icon={faEnvelope} />
          <MenuEntry title="Blog" icon={faFilePen} />
        </Menu>
        <ThemeSwitch />
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
