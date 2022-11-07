function Anime() {
  return (
    <section className="bg-white w-[250px] m-4 relative rounded-t-md rounded-b-md">
      <article>
        <figure className="cursor-pointer object-cover">
          <img
            src="https://via.placeholder.com/300x200"
            className="w-full h-[300px] rounded-t-md"
            alt="Anime"
          />
        </figure>
        <article className="p-4">
          <div>
            <h2 className="font-semibold text-lg border-b border-gray-300 mb-1">
              One Piece
            </h2>
          </div>
          <p className="text-sm font-semibold">
            One Piece is a Japanese manga series written and illustrated by
            Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen
            Jump magazine since July 22, 1997, and has been collected into 97
            tankōbon volumes. The story follows the adventures of Monkey
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
