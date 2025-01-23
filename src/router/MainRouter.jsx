import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import CoffeeDetail from "../Pages/CoffeeDetail/CoffeeDetail";
import CoffeeUpdate from "../Pages/CoffeeUpdate/CoffeeUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:3000/coffees"),
      },
      {
        path: "/coffeeDetail/:id",
        element: <CoffeeDetail></CoffeeDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "/coffeeUpdate/:id",
        element: <CoffeeUpdate></CoffeeUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
    ],
  },
]);
export default router;
