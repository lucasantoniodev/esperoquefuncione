import { RouterProvider, createBrowserRouter, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { CreatePostPage } from "../pages/CreatePostPage";
import { EditPostPage } from "../pages/EditPostPage";
import { HomePage } from "../pages/Home";
import { PostDetailPage } from "../pages/PostDetailPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "post/:id",
        element: <PostDetailPage />,
      },
      {
        path: "create",
        element: <CreatePostPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPostPage />,
      },
    ],
  },
]);

export const MainRoutes = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};
