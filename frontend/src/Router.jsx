import {
    createBrowserRouter,
  } from 'react-router-dom'
  
  import Landing from "./assets/components/Landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
      }
])

export default router;