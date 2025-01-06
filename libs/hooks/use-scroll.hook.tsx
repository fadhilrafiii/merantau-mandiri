import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScrollStop = () => {
      setIsScrolling(true);

      debounce(() => {
        setIsScrolling(false);
      }, 1000)();
    };

    window.addEventListener('scroll', handleScrollStop);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', handleScrollStop);
    };
  }, []);

  return {
    isScrolling,
  };
};

export default useScroll;
