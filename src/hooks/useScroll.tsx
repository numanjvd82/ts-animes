import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      alert('You have reached the bottom of the page');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]);

  return scroll;
};

export default useScroll;
