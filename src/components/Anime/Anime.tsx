import { Anime as AnimeType } from '../../slices/animeSlice';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import React from 'react';

const Anime = React.forwardRef<HTMLDivElement, { anime: AnimeType }>(
  ({ anime }, ref) => {
    const { attributes } = anime;

    const content = () => {
      return (
        <article className="">
          <figure className="overflow-hidden cursor-pointer object-cover relative">
            <img
              src={attributes.posterImage.large}
              className="w-full h-[300px] rounded-t-md hover:opacity-80 hover:scale-125 transition duration-500 ease-in-out"
              alt={attributes.titles.en}
            />
            <button className="text-xl text-yellow-50 transition-all hover:text-2xl hover:text-yellow-200 absolute top-0 right-0 mx-2 my-1">
              <FaStar />
            </button>
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
              <Link to={`/anime/${anime.id}`}>Read More</Link>
            </button>
          </article>
        </article>
      );
    };

    const renderAnimes = () => {
      if (ref) {
        return (
          <section
            ref={ref}
            className=" bg-white m-4 rounded-t-md rounded-b-md w-[400px] md:w-[350px]"
          >
            {content()}
          </section>
        );
      }
      return (
        <section className=" bg-white m-4 rounded-t-md rounded-b-md w-[400px] md:w-[350px]">
          {content()}
        </section>
      );
    };

    return <>{renderAnimes()}</>;
  }
);

export default Anime;
