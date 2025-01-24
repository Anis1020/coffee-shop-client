import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import CoffeeDetail from "../Pages/CoffeeDetail/CoffeeDetail";
import CoffeeUpdate from "../Pages/CoffeeUpdate/CoffeeUpdate";
import AddItem from "../Forms/AddItemForm/AddItem";
import Login from "../Forms/LoginForm/Login";
import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import PrivateRoute from "./PrivateRoute";

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
        path: "/addCoffee",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      },
    ],
  },
]);
export default router;
