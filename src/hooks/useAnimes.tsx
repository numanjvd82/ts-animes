import { useEffect, useState } from 'react';
import { fetchAnimes, selectAnimes } from '../slices/animeSlice';
import { useAppDispatch, useAppSelector } from './hooks';

const useAnimes = () => {
  const [offset, setOffset] = useState(0);
  const [isBottom, setIsBottom] = useState(false);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const animes = useAppSelector(selectAnimes);
  const dispatch = useAppDispatch();

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(fetchAnimes(offset));
  }, []);

  useEffect(() => {
    if (isBottom) {
      if (limit > 100) {
        setHasMore(false);
        return;
      }
      setOffset((prev) => prev + 10);
      dispatch(fetchAnimes(offset));
      setLimit((prev) => prev + 10);
      setIsBottom(false);
    }
  }, [isBottom]);

  return { animes, hasMore };
};

export default useAnimes;
