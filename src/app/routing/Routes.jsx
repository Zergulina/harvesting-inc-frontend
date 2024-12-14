import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import AuthPage from "../../pages/AuthPage/AuthPage";
import Header from "../../modules/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import AdminTableSelection from "../../modules/AdminTableSelection/AdminTableSelection";
import AdminTableSelectionPage from "../../pages/AdminTableSelectionPage/AdminTableSelectionPage";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Header />,
          children: [
            {
              path: "/",
              element: <HomePage/>,
            },
            {
              path: "/admin",
              element: <AdminTableSelectionPage/>,
            },
            {
              path: "/logout",
              element: <div>Logout</div>,
            },
          ],
        }
      ]
    },
  ];


  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <div>Hello</div>,
    },
    {
      path: "/login",
      element: <AuthPage />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;