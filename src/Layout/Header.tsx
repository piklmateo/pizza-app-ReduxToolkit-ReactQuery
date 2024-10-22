import { Link, useNavigate } from "react-router-dom";
import Username from "./Username";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery !== "") {
      navigate(`/orders/${searchQuery}`);
      setSearchQuery("");
    }
  };

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
        value={searchQuery}
        onChange={handleSearchQueryChange}
        onKeyDown={handleSearch}
      />
      <Username />
    </div>
  );
};

export default Header;
