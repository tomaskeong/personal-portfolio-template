import { mediaQueries } from '@utils/mediaQueries';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import styles from './Switch.module.scss';

type SwitchProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  img?: { src: string; alt: string };
  ariaLabel: string;
  animate?: boolean;
};

function Switch(props: SwitchProps) {
  const isMd = useMediaQuery(mediaQueries.md);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked);
  };

  const transition = { transition: { duration: 0.2 } };
  const switchButtonMotion = !isMd
    ? {
        checked: { x: 'calc(100% - 2.5px)', y: 0, transition },
        notChecked: { x: '2.5px', y: 0, transition },
      }
    : {
        checked: { x: '2.5px', y: 'calc(100% - 2.5px)', transition },
        notChecked: { x: '2.5px', y: '0px', transition },
      };

  const renderImage = () => {
    if (!props.img) return null;
    const SwitchBtnImage = <Image src={props.img.src} alt={props.img.alt} width={24} height={24} />;
    if (props.animate) {
      return (
        <motion.div key={props.img.src} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {SwitchBtnImage}
        </motion.div>
      );
    } else {
      return SwitchBtnImage;
    }
  };

  return (
    <>
      <input aria-label={props.ariaLabel} className={styles.switchCheckbox} id={props.id} type="checkbox" onChange={handleChange} checked={props.checked} />
      <motion.label className={styles.switchLabel} htmlFor={props.id}>
        <motion.span variants={switchButtonMotion} animate={props.checked ? 'checked' : 'notChecked'} initial={false} className={styles.switchButton}>
          {renderImage()}
        </motion.span>
      </motion.label>
    </>
  );
}

export default Switch;
