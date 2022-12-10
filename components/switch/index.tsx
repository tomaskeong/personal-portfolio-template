import Image, { StaticImageData } from 'next/image';

import styles from './Switch.module.scss';
type SwitchProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  imageSrc?: StaticImageData;
};

function Switch(props: SwitchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked);
  };

  return (
    <>
      <input className={styles.switchCheckbox} id={props.id} type="checkbox" onChange={handleChange} checked={props.checked} />
      <label className={styles.switchLabel} htmlFor={props.id}>
        <span className={styles.switchButton}>{props.imageSrc && <Image src={props.imageSrc} alt="Theme Image" width={24} height={24} />}</span>
      </label>
    </>
  );
}

export default Switch;
