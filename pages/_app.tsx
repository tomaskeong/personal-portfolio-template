import '@styles/globals.scss';
import '@styles/app.scss';
import '@styles/style.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Menu from '@components/menu';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import ColorPicker from '@components/color-picker';
import ThemeProvider from 'context/Theme';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeSwitch = dynamic(() => import('@components/theme-switch/index'), {
  ssr: false,
});
const Cursor = dynamic(() => import('@components/animated-cursor/index'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider>
        <Cursor />
        <header>
          <section className="top-overlay" />
          <Menu />
          <ThemeSwitch />
          <ColorPicker />
        </header>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <main>
            <Component {...pageProps} />
          </main>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
