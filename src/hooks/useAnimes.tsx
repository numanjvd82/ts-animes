import { useCallback, useEffect, useRef, useState } from 'react';
import {
  fetchAnimeBySearch,
  fetchAnimes,
  searchQuery,
  selectAnimes,
} from '../slices/animeSlice';
import { useAppDispatch, useAppSelector } from './hooks';

const useAnimes = () => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const animes = useAppSelector(selectAnimes);
  const search = useAppSelector(searchQuery);
  const dispatch = useAppDispatch();

  const limit = 100;

  useEffect(() => {
    dispatch(fetchAnimes(offset));
  }, [offset]);

  useEffect(() => {
    if (search) {
      dispatch(fetchAnimeBySearch(search));
    }
  }, [search]);

  const intObserver = useRef<IntersectionObserver | null>(null);
  const lastAnimeRef = useCallback(
    (node: HTMLDivElement) => {
      if (animes.loading === 'pending') {
        return;
      }

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((anime) => {
        if (anime[0].isIntersecting && hasMore === true) {
          if (offset < limit) {
            setOffset((prevOffset) => prevOffset + 10); // Ten animes per page
          }
          if (offset === limit) {
            setHasMore(false);
          }
        }
      });

      if (node) intObserver.current.observe(node);
    },
    [hasMore, offset]
  );

  return { animes, hasMore, lastAnimeRef };
};

export default useAnimes;
