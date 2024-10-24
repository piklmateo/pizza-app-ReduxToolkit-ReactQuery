import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import AppLayout from "./Layout/AppLayout";
import Cartpage from "./pages/Cartpage";
import Formpage from "./pages/Formpage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Orderpage from "./pages/Orderpage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: (
          <ProtectedRoutes>
            <Menupage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <Cartpage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/order",
        element: (
          <ProtectedRoutes>
            <Formpage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/orders/:id",
        element: (
          <ProtectedRoutes>
            <Orderpage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
