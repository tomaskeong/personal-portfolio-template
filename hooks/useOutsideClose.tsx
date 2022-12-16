import { RefObject, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useOutsideClose(ref: RefObject<any>) {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setClickedOutside(!!(ref.current && !ref.current.contains(event.target)));
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickedOutside, ref]);

  return clickedOutside;
}

export default useOutsideClose;
