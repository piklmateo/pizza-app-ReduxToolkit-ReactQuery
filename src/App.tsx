import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import AppLayout from "./Layout/AppLayout";
import Cartpage from "./pages/Cartpage";
import Formpage from "./pages/Formpage";

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
        element: <Menupage />,
      },
      {
        path: "/cart",
        element: <Cartpage />,
      },
      {
        path: "/order",
        element: <Formpage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
