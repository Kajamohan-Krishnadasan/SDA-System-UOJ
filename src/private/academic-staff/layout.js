import {
  HomeStaff,
  StaffComponent,
  ViewAllRequestsStaff,
  ViewSingleRequestStaff,
} from "./index.js";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense } from "react";
import LoadingComponent from "../../shared/loading/loading.component.jsx";

const StaffLayout = () => {
  return (
    <StaffComponent>
      <Suspense fallback={<LoadingComponent />}>
        <Outlet />
      </Suspense>
    </StaffComponent>
  );
};

const StaffRouter = createBrowserRouter([
  {
    path: "/academic-staff",
    element: <StaffLayout />,
    children: [
      {
        path: "home",
        element: <HomeStaff />,
      },
      {
        path: "view-all-request",
        element: <ViewAllRequestsStaff />,
      },
      {
        path: "view-single-request/:id",
        element: <ViewSingleRequestStaff />,
      },
      {
        path: "",
        element: <HomeStaff />,
      },
      {
        path: "*",
        element: <HomeStaff />,
      },
    ],
  },
]);

export { StaffRouter, StaffLayout };
