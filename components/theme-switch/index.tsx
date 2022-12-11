import themeDark from '@assets/images/theme-dark.png';
import themeLight from '@assets/images/theme-light.png';
import Switch from '@components/switch';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | undefined;

function ThemeSwitch() {
  const [activeTheme, setActiveTheme] = useState<Theme>(document.body.dataset.theme as Theme);
  const oppositeTheme: Theme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme ?? '');
  }, [activeTheme]);

  return (
    <div className="theme-switch">
      <Switch
        checked={activeTheme === 'light'}
        onChange={() => setActiveTheme(oppositeTheme)}
        id="theme-switch"
        img={{ src: activeTheme === 'light' ? themeLight.src : themeDark.src, alt: 'Theme Image' }}
        ariaLabel={`Change to ${oppositeTheme} mode`}
        animate={true}
      />
    </div>
  );
}

export default ThemeSwitch;
