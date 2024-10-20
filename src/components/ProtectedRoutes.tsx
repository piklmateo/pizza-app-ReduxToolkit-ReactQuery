import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoutes;
