import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./components/context/UserContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Menu/Layout";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Favorites } from "./pages/Favorites/Favorites";
import { NotFound } from "./pages/NotFound/NotFound";
import { Profile  } from "./pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/wiew",
        element: <MovieDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
} else {
  console.error(`Element with id "root" not found`);
}