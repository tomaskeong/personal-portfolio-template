import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
    const colorMainPrimary = window.localStorage.getItem('color-main-primary');
    if (colorMainPrimary) {
      document.documentElement.style.setProperty('--color-main-primary', window.localStorage.getItem('color-main-primary'));
    }
  `;
  return (
    <Html>
      <Head>
        <meta name="description" content="Personal Portfolio Template" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} /> {/* Allow to set the theme before SSR Next js hydrates page */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
