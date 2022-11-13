import Loader from '../Loader/Loader';
import Anime from '../Anime/Anime';
import useAnimes from '../../hooks/useAnimes';

function Animes() {
  const { animes, hasMore, lastAnimeRef } = useAnimes();

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

  const content = () => {
    if (animes.loading === 'pending') {
      return <Loader />;
    }
    if (animes.error) {
      return (
        <h1 className="text-3xl text-white my-2 bg-red-500 p-2 rounded-md">
          {animes.error}
        </h1>
      );
    }
    if (animes.animes.length === 0) {
      return (
        <h1 className="text-3xl text-white my-2 bg-red-500 p-2 rounded-md">
          No animes found
        </h1>
      );
    }
    return (
      <section id="top" className="md:max-w-[1500px] mx-auto">
        <section className="md:flex md:flex-wrap  sm:justify-center">
          {animes.animes.map((anime, index) => {
            if (animes.animes.length === index + 1) {
              return <Anime key={index} anime={anime} ref={lastAnimeRef} />;
            }
            return <Anime anime={anime} key={index} />;
          })}
        </section>
        {noMore}
      </section>
    );
  };

  return <>{content()}</>;
}

export default Animes;
