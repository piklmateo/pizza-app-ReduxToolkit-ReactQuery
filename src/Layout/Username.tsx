import { useSelector } from "react-redux";

const Username = () => {
  const userName = useSelector((state: any) => state.user.name);
  return <>{userName && <p className="hidden sm:block">{userName}</p>}</>;
};

export default Username;
