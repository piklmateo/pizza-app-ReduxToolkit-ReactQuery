import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-yellow-500 px-6 py-4 text-slate-900">
      <Link to="/">
        <h1 className="text-xl font-medium uppercase tracking-wide">Fast react pizza co.</h1>
      </Link>
      <input
        className="focus:ring-3 rounded-full bg-yellow-100 px-4 py-2 text-slate-500 ring-yellow-600 transition-all focus:px-6 focus:outline-none"
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
      />
      <p className="hidden sm:block">UserName</p>
    </div>
  );
};

export default Header;
