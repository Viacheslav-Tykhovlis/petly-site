import { useEffect, useState } from 'react';

const useFormStyle = () => {
  const [formStyle, setFormStyle] = useState({});
  const deskFormHeight = 900;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight <= deskFormHeight) {
        setFormStyle({ top: '37vh' });
      } else {
        setFormStyle({});
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return formStyle;
};

export default useFormStyle;
