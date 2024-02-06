import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems"
import CreateItem from "./pages/items/CreateItem"
import ShowItem from "./pages/items/ShowItem"
import UpdateItem from "./pages/items/UpdateItem"
import Home from "./pages/Home";
import ItemsLayout from "./pages/items/Layout";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: "/", element: <Home /> },
    {
      path: "items",
      element: <ItemsLayout />,
      children: [
        { index: "/", element: <ListItems /> },
        { index: "new", element: <CreateItem /> },
        { index: ":id", element: <ShowItem /> },
        { index: ":id/update", element: <UpdateItem /> },]
    }
  ]
}])
export default router