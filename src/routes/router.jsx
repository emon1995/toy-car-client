import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import MainLayout from "../layout/MainLayout";
import AllToys from "../page/AllToys/AllToys";
import MyToys from "../page/MyToys/MyToys";
import AddToy from "../page/AddToy/AddToy";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import SingleToy from "../page/SingleToy/SingleToy";
import UpdateToy from "../page/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toy-marketplace-flame.vercel.app/allToys"),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoutes>
            <SingleToy></SingleToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-marketplace-flame.vercel.app/toy/${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoutes>
            <AddToy></AddToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateToy/:id",
        element: (
          <PrivateRoutes>
            <UpdateToy></UpdateToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-marketplace-flame.vercel.app/toy/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
