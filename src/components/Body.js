import Browse from "./Browse"
import Login from "./Login"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"

const Body = () => {

    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login></Login>,
        },
        {
            path: "/browse",
            element: <Browse></Browse>,
        },
      ]);


    return(
        <div>
            
            <RouterProvider router={appRouter}></RouterProvider>

        </div>
    )
}

export default Body