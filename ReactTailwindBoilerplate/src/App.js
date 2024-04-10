import DemoComponent from "./DemoComponent";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Signup from "./Layout/Signup";
import Profile from "./Layout/Profile";
import AfterSignup from "./Layout/AfterSignup";
import WhatBrings from "./Layout/WhatBrings";
import Verify from "./Layout/Verify";
import FormProvider from "./Context/FormProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/verify",
    element: <Verify/>,
  },
  {
    path: "/profile",
    element: <AfterSignup/>,
    children:[
      {
        path: "/profile",
    element: <Profile />,
      },
      {
        path: "whatbrings",
    element: <WhatBrings />,
      }
    ]
  },
]);


function App() {
  return (
    <div>
      <FormProvider>
      <RouterProvider router={router} />
      </FormProvider>
    </div>
  );
}

export default App;
