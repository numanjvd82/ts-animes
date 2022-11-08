import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectAnimes } from '../../slices/animeSlice';

function SingleAnime() {
  const { id } = useParams();
  const state = useAppSelector(selectAnimes);

  const anime = state.animes.find((anime) => anime.id === id);

  return (
    <>
      <section>
        <div className="relative">
          <figure
            className="before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-70 before:z-10"
            style={{
              backgroundImage: `url(${anime?.attributes.posterImage.large})`,
              width: '100%',
              height: '500px',
              backgroundSize: 'cover',
              backgroundPosition: 'top-center',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
            }}
          ></figure>
        </div>
        <article className="p-4  md:text-center bg-white">
          <section className="md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="text-4xl mb-2 font-semibold ">
              {anime?.attributes.titles.en}
            </h1>
            <p className="text-md font-bold bg-purple-300 p-1 rounded-md mb-1">
              Average Rating: {anime?.attributes.averageRating}
            </p>
            <p
              className={`text-md font-bold ${
                anime?.attributes.status === 'finished'
                  ? 'bg-green-300'
                  : 'bg-red-300'
              } p-1 rounded-md mb-1`}
            >
              Status: {anime?.attributes.status}
            </p>
          </section>
          <p className="text-md">{anime?.attributes.synopsis}</p>
        </article>
      </section>
    </>
  );
}

export default SingleAnime;
