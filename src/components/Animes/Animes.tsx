import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAnimes, fetchAnimes } from '../../slices/animeSlice';

import Loader from '../Loader/Loader';
import Anime from '../Anime/Anime';

function Animes() {
  const animes = useAppSelector(selectAnimes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAnimes());
  }, []);

  console.log(animes);

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
