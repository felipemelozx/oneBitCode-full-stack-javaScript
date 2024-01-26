import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

const Router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "item",
      element: <ItemsLayout />,
      children: [
        { index: true, element: <ListItems /> },
        { index: "new", element: <CreateItem /> },
        { index: ":id", element: <ShowItem /> },
        { index: ":id/update", element: <UpdateItem /> },]
    },

  ]
}])