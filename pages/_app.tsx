import '@styles/globals.scss';
import '@styles/app.scss';
import '@styles/style.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Footer from '@components/footer';
import Menu from '@components/menu';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import ColorPicker from '@components/color-picker';
import ThemeProvider from 'context/Theme';
import type { AppProps } from 'next/app';
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
        <Menu />
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
