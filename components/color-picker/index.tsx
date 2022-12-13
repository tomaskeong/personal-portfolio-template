import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOutsideClose from '@utils/hooks/useOutsideClose';
import { mediaQueries } from '@utils/mediaQueries';
import { motion } from 'framer-motion';
import { createRef, useEffect, useRef, useState } from 'react';
import { Color, ColorResult, GithubPicker } from 'react-color';
import { useMediaQuery } from 'react-responsive';

import styles from './ColorPicker.module.scss';
const colors = [
  '#ff1b71',
  '#e0201a',
  '#ed3e15',
  '#fb6221',
  '#fda206',
  '#ffed00',
  '#c3d71a',
  '#17ab70',
  '#1a8f9c',
  '#2569e6',
  '#5a4fce',
  '#572d86',
];
function ColorPicker() {
  const [currentColor, setCurrentColor] = useState<Color>('#ff1b71');
  const [open, setOpen] = useState<boolean>(false);
  const isMd = useMediaQuery(mediaQueries.md);
  const colorPickerRef = createRef<HTMLDivElement>();
  const clickedOutside = useOutsideClose(colorPickerRef);

  const onChangeColor = (color: ColorResult) => {
    const selectedColor = color.hex;
    document.documentElement.style.setProperty('--color-main-primary', selectedColor);
    localStorage.setItem('color-main-primary', selectedColor);
    setCurrentColor(selectedColor);
    setOpen(false);
  };

  useEffect(() => {
    const currentColorStorage = window.localStorage.getItem('color-main-primary');
    currentColorStorage && setCurrentColor(currentColorStorage);
  }, []);

  useEffect(() => {
    if (clickedOutside) setOpen(false);
  }, [clickedOutside]);

  return (
    <div className={styles.colorPicker} ref={colorPickerRef}>
      <div className={styles.iconContainer} onClick={() => setOpen((o) => !o)}>
        <FontAwesomeIcon icon={faBrush} size="lg" />
      </div>

      {open && (
        <motion.div
          className={styles.pickerContainer}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: !isMd ? 'var(--space-xs)' : 'calc(var(--space-xs) * -1)' }}
          transition={{ duration: 0.2, bounce: 0 }}
        >
          <GithubPicker color={currentColor} colors={colors} width="67px" onChangeComplete={onChangeColor} triangle="hide" />
        </motion.div>
      )}
    </div>
  );
}

export default ColorPicker;
