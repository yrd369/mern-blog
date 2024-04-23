import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <header className="font-poppins p-3 px-10 flex bg-[#222831] gap-3 justify-between flex-wrap text-white items-center">
        <Link to={"/"}>
          <h1 className="flex flex-wrap text-md sm:text-xl font-semibold hover:opacity-95">
            Blog<span>Co</span>
          </h1>
        </Link>
        <form className="flex items-center px-3 py-1 rounded text-black bg-white">
          <input
            type="text"
            className="rounded flex flex-wrap w-24 sm:w-64 outline-none "
          />
          <IoSearchOutline />
        </form>
        <ul className="flex gap-3 items-center">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:opacity-95">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:opacity-95">About</li>
          </Link>
          {currentUser ? (
            <Link to={"/dashboard"}>
              <img
                src={currentUser.profilePicture}
                className="rounded-full w-10"
                alt="avatar"
              />
            </Link>
          ) : (
            <Link to={"/sign-in"}>
              <li className="bg-blue-500 px-2 py-0.5 rounded-md hover:opacity-95">
                Sign in
              </li>
            </Link>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
