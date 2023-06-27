import {
  HomeStudent,
  MakeRequestStudent,
  StudentComponent,
  ViewAllRequestStudent,
  ViewRequestRequirementsDetailsStudent,
  ViewSingleRequestStudent,
} from "./index.js";
import HeaderComponent from "../common/header/header.component.jsx";
import FooterComponent from "../common/footer/footer.component.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import NotfoundComponent from "../../shared/notfound/notfound.component.jsx";
import { Suspense } from "react";
import LoadingComponent from "../../shared/loading/loading.component.jsx";

const StudentLayout = () => {
  return (
    <StudentComponent>
      <Suspense fallback={<LoadingComponent />}>
        <Outlet />
      </Suspense>
      <FooterComponent />
    </StudentComponent>
  );
};

const StudentRouter = createBrowserRouter([
  {
    path: "/student",
    element: <StudentLayout />,

    children: [
      {
        path: "",
        element: <HomeStudent />,
      },
      {
        path: "home",
        element: <HomeStudent />,
      },
      {
        path: "make-request",
        element: <MakeRequestStudent />,
      },
      {
        path: "view-all-request",
        element: <ViewAllRequestStudent />,
      },
      {
        path: "view-single-request/:id",
        element: <ViewSingleRequestStudent />,
      },
      {
        path: "view-request-requirements-details/:id",
        element: <ViewRequestRequirementsDetailsStudent />,
      },

      {
        path: "*",
        element: <NotfoundComponent />,
      },
    ],
  },
  {
    path: "*",
    element: <NotfoundComponent />,
  },
]);

export { StudentRouter, StudentLayout };
