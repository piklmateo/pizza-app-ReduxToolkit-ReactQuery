import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="mt-40 flex flex-col items-center justify-center gap-5 text-wrap text-center px-4">
        <h1 className="text-4xl text-slate-900">The best pizza .</h1>
        <h1 className="text-4xl text-yellow-500">Straight out of the oven, straight to you .</h1>
        <div className="space-y-4">
          <h2>👋 Welcome! Please start by telling us your name:</h2>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            name="phone"
            id="phone"
            placeholder="Please enter your name"
          />
        </div>
        <button
          onClick={() => navigate("/menu")}
          className="rounded-full bg-yellow-400 px-6 py-4 text-lg text-slate-900 transition-all hover:bg-yellow-300"
        >
          Continue ordering, UserName
        </button>
      </div>
    </main>
  );
};

export default Main;
