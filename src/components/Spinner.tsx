import { ScaleLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white bg-opacity-50 fixed top-0 left-0 z-50">
      <ScaleLoader color="#facc15" />
    </div>
  );
};

export default Spinner;
