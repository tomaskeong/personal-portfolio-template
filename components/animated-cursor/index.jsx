import { ThemeContext } from 'context/Theme';
import hexRgb from 'hex-rgb';
import dynamic from 'next/dynamic';
import { useContext } from 'react';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

function Cursor() {
  const { mainPrimaryColor } = useContext(ThemeContext);

  return (
    <>
      {mainPrimaryColor !== null && mainPrimaryColor !== '' && (
        <AnimatedCursor
          outerSize={50}
          outerScale={1}
          trailingSpeed={4}
          color={hexRgb(mainPrimaryColor, { format: 'array' }).slice(0, -1).toString()}
        />
      )}
    </>
  );
}

export default Cursor;
