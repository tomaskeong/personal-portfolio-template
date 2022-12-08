import '@styles/globals.scss';
import '@styles/app.scss';
import '@styles/style.scss';
import type { AppProps } from 'next/app';
import Menu from '@components/menu';
import MenuEntry from '@components/menu/MenuEntry';
import Footer from '@components/footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { faHome, faUser, faBriefcase, faEnvelope, faFilePen } from '@fortawesome/free-solid-svg-icons';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <section className="topOverlay" />
      <header>
        <Menu>
          <MenuEntry title="Home" icon={faHome} />
          <MenuEntry title="About" icon={faUser} />
          <MenuEntry title="Portfolio" icon={faBriefcase} />
          <MenuEntry title="Contact" icon={faEnvelope} />
          <MenuEntry title="Blog" icon={faFilePen} />
        </Menu>
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
