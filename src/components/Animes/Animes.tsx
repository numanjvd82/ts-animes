import Loader from '../Loader/Loader';
import Anime from '../Anime/Anime';
import useAnimes from '../../hooks/useAnimes';

function Animes() {
  const { animes, hasMore } = useAnimes();

  const noMore = !hasMore ? (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl text-white my-2 bg-blue-500 p-2 rounded-md transition-all hover:-translate-y-2 hover:bg-blue-700">
        <a
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          href="#top"
        >
          No more animes...
        </a>
      </h1>
    </div>
  ) : null;

  return (
    <section id="top" className="md:max-w-[1500px] mx-auto">
      {animes.loading === 'pending' && <Loader />}
      <section className="md:flex md:flex-wrap">
        {animes.loading === 'failed' && <h1>Failed to load</h1>}
        {animes.loading === 'success' &&
          animes.animes.map((anime) => <Anime key={anime.id} anime={anime} />)}
      </section>
      {noMore}
    </section>
  );
}

export default Animes;
