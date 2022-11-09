import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectAnimes, fetchAnimes } from '../../slices/animeSlice';

import Loader from '../Loader/Loader';
import Anime from '../Anime/Anime';
import useScroll from '../../hooks/useScroll';

function Animes() {
  const scroll = useScroll();
  console.log(scroll);
  const animes = useAppSelector(selectAnimes);
  const dispatch = useAppDispatch();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchAnimes(offset));
  }, [offset]);

  return (
    <section className="md:max-w-[1500px] mx-auto">
      <section className="md:flex md:flex-wrap">
        {animes.loading === 'pending' && <Loader />}
        {animes.loading === 'failed' && <h1>Failed to load</h1>}
        {animes.loading === 'success' &&
          animes.animes.map((anime) => <Anime key={anime.id} anime={anime} />)}
      </section>
    </section>
  );
}

export default Animes;
