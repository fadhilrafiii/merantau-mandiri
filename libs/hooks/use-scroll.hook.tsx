import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      debounce(() => {
        if (!isScrolling) setIsScrolling(true);
      })();
      setScroll(window.scrollY);
    };

    const handleStopScroll = () => {
      setIsScrolling(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleStopScroll);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleStopScroll);
    };
  }, []);

  return {
    scroll,
    isScrolling,
  };
};

export default useScroll;
