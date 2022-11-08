import { Anime as AnimeType } from '../../slices/animeSlice';

function Anime({ anime }: { anime: AnimeType }) {
  const { attributes } = anime;
  return (
    <section className=" bg-white m-4 relative rounded-t-md rounded-b-md w-[350px] md:w-[250px]">
      <article className="">
        <figure className=" cursor-pointer object-cover">
          <img
            src={attributes.posterImage.large}
            className="w-full h-[300px] rounded-t-md hover:opacity-80 transition duration-500 ease-in-out"
            alt={attributes.titles.en}
          />
        </figure>
        <article className="p-4 w-full h-full">
          <div>
            <h2 className="font-semibold text-lg border-b border-gray-300 mb-1">
              {attributes.titles.en}
            </h2>
          </div>
          <p className="text-sm font-semibold">
            {attributes.synopsis.slice(0, 100)}...
          </p>
          <button className="text-sm mt-3 text-gray-800 font-semibold bg-blue-300 p-1 rounded-md transition-colors hover:bg-blue-500 hover:text-gray-700">
            Read More
          </button>
        </article>
      </article>
    </section>
  );
}

export default Anime;
