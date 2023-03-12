import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import { Provider } from "react-redux";
import store from "./utils/store";


const AppLayout = () => {

  return (
    <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/pokemanDetails/:name",
        element: <PokemonDetail />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
