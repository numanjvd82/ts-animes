import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/gundam.png';

function Navbar() {
  return (
    <>
      <nav className="bg-blue-900 px-6 h-14 w-full ">
        <div className="flex justify-between items-center pt-1">
          <figure className="w-12">
            <Link to="/">
              <img className="object-cover" src={logo} alt="Anime Logo" />
            </Link>
          </figure>

          <article className="flex justify-center items-center">
            <input
              className="mr-2 w-64 h-8 rounded-md text-sm text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              name="search-anime"
              type="text"
              placeholder="Search Animes"
            />
            <figure>
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Login
                </button>
              </Link>
            </figure>
          </article>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
