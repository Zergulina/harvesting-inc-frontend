import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import AuthPage from "../../pages/AuthPage/AuthPage";
import Header from "../../modules/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import AdminTableSelection from "../../modules/AdminTableSelection/AdminTableSelection";
import AdminTableSelectionPage from "../../pages/AdminTableSelectionPage/AdminTableSelectionPage";
import HrTableSelectionPage from "../../pages/HrTableSelectionPage/HrTableSelectionPage";
import CropTypePage from "../../pages/CropTypePage/CropTypePage";
import CropTable from "../../modules/CropTable/CropTable";
import PostPage from "../../pages/PostPage/PostPage";
import StatusPage from "../../pages/StatusPage/StatusPage";
import FieldHarvestingReportPage from "../../pages/FieldHarvestingReportPage/FieldHarvestingReportPage";
import PeopleExperienceReportPage from "../../pages/PeopleExperienceReportPage/PeopleExperienceReportPage";
import LogoutPage from "../../pages/LogoutPage/LogoutPage";
import DriverTableSelectionPage from "../../pages/DriverTableSelectionPage/DriverTableSelectionPage";
import MachineReportPage from "../../pages/MachineReportPage/MachineReportPage";

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
              path: "/hr",
              element: <HrTableSelectionPage/>,
            },
            {
              path: "/driver",
              element: <DriverTableSelectionPage/>
            },
            {
              path: "/crop-types",
              element: <CropTypePage/>,
            },
            {
              path: "/crop-types/:cropTypeId/crops",
              element: <CropTable/>,
            },
            {
              path: "/posts",
              element: <PostPage/>,
            },
            {
              path: "/statuses",
              element: <StatusPage/>,
            },
            {
              path: "/reports/field-harvesting",
              element: <FieldHarvestingReportPage/>,
            },
            {
              path: "/reports/people-experience",
              element: <PeopleExperienceReportPage/>,
            },
            {
              path: "/reports/machines",
              element: <MachineReportPage/>,
            },
            {
              path: "/logout",
              element: <LogoutPage/>,
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