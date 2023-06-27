import { lazy } from "react";
const ApprovedRequestStudent = lazy(() =>
  import("./approved-request/approvedRequest.component.jsx")
);
const HomeStudent = lazy(() => import("./home/home.component.jsx"));
const MainStudent = lazy(() => import("./main/main.component.jsx"));
const MakeRequestStudent = lazy(() =>
  import("./make-request/makeRequest.component.jsx")
);
const PendingRequestStudent = lazy(() =>
  import("./pending-request/pendingRequest.component.jsx")
);
const RejectedRequestStudent = lazy(() =>
  import("./rejected-request/rejectedRequest.component.jsx")
);
const SettingStudent = lazy(() => import("./setting/setting.component.jsx"));
const StudentComponent = lazy(() => import("./student/student.component.jsx"));
const ViewAllRequestStudent = lazy(() =>
  import("./view-all-request/viewAllRequest.component.jsx")
);
const ViewRequestRequirementsDetailsStudent = lazy(() =>
  import(
    "./view-request-requirements-details/viewRequestRequirementsDetails.component.jsx"
  )
);
const ViewSingleRequestStudent = lazy(() =>
  import("./view-single-request/viewSingleRequest.component.jsx")
);

export {
  ApprovedRequestStudent,
  PendingRequestStudent,
  RejectedRequestStudent,
  HomeStudent,
  MainStudent,
  MakeRequestStudent,
  SettingStudent,
  StudentComponent,
  ViewAllRequestStudent,
  ViewRequestRequirementsDetailsStudent,
  ViewSingleRequestStudent,
};
