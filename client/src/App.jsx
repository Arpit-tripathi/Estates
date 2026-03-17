import "./App.css";

import Layout from "./routes/layout/layout";
import "./routes/layout/layout.scss";
import ListPage from "./routes/listPage/listPage";
import HomePage from "./routes/homePage/homePage";
import SinglePage from "./routes/singlePage/singlePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./routes/login/login";

function App() {
  const router = createBrowserRouter([
 {
    path: "/",
    element: <Layout />,
    children:[
      {
      path:"/",
      element:<HomePage/>,
      },{
        path:"/list",
        element:<ListPage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/:id",
        element:<SinglePage/>
      }
    ],
  },
  
  ])
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
