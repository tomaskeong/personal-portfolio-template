import themeDark from '@assets/images/theme-dark.png';
import themeLight from '@assets/images/theme-light.png';
import Switch from '@components/switch';
import { useCallback, useEffect, useState } from 'react';

import styles from './ThemeSwitch.module.scss';

type Theme = 'dark' | 'light' | undefined;

function ThemeSwitch() {
  const [activeTheme, setActiveTheme] = useState<Theme>(document.body.dataset.theme as Theme);
  const oppositeTheme: Theme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme ?? '');
  }, [activeTheme]);

  const changeTheme = useCallback(() => {
    setActiveTheme(oppositeTheme);
  }, [oppositeTheme]);

  return (
    <div className={styles.themeSwitch}>
      <Switch
        checked={activeTheme === 'light'}
        onChange={changeTheme}
        id="theme-switch"
        img={{ src: activeTheme === 'light' ? themeLight.src : themeDark.src, alt: 'Theme Image' }}
        ariaLabel={`Change to ${oppositeTheme} mode`}
        animate={true}
      />
    </div>
  );
}

export default ThemeSwitch;
