import '@styles/globals.scss';
import '@styles/app.scss';
import '@styles/style.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Footer from '@components/footer';
import Menu from '@components/menu';
import MenuEntry from '@components/menu/MenuEntry';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
config.autoAddCss = false;
import ColorPicker from '@components/color-picker';
import { faAddressCard, faBriefcase, faDollar, faEnvelope, faFilePen, faHandshake, faHome } from '@fortawesome/free-solid-svg-icons';
import ThemeProvider from 'context/Theme';
import dynamic from 'next/dynamic';

const ThemeSwitch = dynamic(() => import('@components/theme-switch/index'), {
  ssr: false,
});
const Cursor = dynamic(() => import('@components/animated-cursor/index'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Cursor />
      <header>
        <section className="top-overlay" />
        <Menu>
          <MenuEntry title="Home" icon={faHome} />
          <MenuEntry title="Resume" icon={faAddressCard} />
          <MenuEntry title="Portfolio" icon={faBriefcase} />
          <MenuEntry title="Clients" icon={faHandshake} />
          <MenuEntry title="Pricing" icon={faDollar} />
          <MenuEntry title="Contact" icon={faEnvelope} />
          <MenuEntry title="Blog" icon={faFilePen} />
        </Menu>
        <ThemeSwitch />
        <ColorPicker />
      </header>
      <main>
        <div className="page-container">
          <Component {...pageProps} />
        </div>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
