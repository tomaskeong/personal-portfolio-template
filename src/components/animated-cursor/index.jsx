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
    <AnimatedCursor
      outerSize={50}
      outerScale={1}
      trailingSpeed={4}
      color={hexRgb(mainPrimaryColor, { format: 'array' }).slice(0, -1).toString()}
      clickables={['.foo']} // without this the animated cursor freezes sometimes when interacting
    />
  );
}

export default Cursor;
