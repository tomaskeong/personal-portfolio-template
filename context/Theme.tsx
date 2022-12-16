import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ThemeContextType = {
  mainPrimaryColor: `#${string}` | undefined | null;
  setMainPrimaryColor: Dispatch<SetStateAction<`#${string}` | undefined | null>>;
};
export const ThemeContext = createContext<ThemeContextType>({ mainPrimaryColor: '#', setMainPrimaryColor: () => null });

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [mainPrimaryColor, setMainPrimaryColor] = useState<`#${string}` | null>();
  return <ThemeContext.Provider value={{ mainPrimaryColor, setMainPrimaryColor }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
