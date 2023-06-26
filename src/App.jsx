import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";

const PublicComponent = lazy(() =>
  import("./public/public/public.component.jsx")
);

const LoadingComponent = lazy(() =>
  import("./shared/loading/loading.component.jsx")
);

const StudentComponent = lazy(() =>
  import("./private/student/student/student.component.jsx")
);

const AcademicStaffComponent = lazy(() =>
  import("./private/academic-staff/academic-staff/academic-staff.component.jsx")
);

// non-academic staff act as admin
const NonAcademicStaffComponent = lazy(() =>
  import(
    "./private/non-academic-staff/non-academic-staff/non-academic-staff.component.jsx"
  )
);

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/sda-uoj-system" />} />

          <Route
            path="/sda-uoj-system/*"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <Routes>
                  <Route index path="/" element={<Navigate to="public" />} />
                  <Route path="public" element={<PublicComponent />} />

                  <Route
                    path="student/*"
                    element={
                      <Suspense fallback={<LoadingComponent />}>
                        <Routes>
                          <Route
                            index
                            path="/"
                            element={<Navigate to="home" />}
                          />
                          <Route path="home" element={<StudentComponent />} />
                          <Route
                            path="loading"
                            element={<LoadingComponent />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/sda-uoj-system" />}
                          />
                        </Routes>
                      </Suspense>
                    }
                  />

                  <Route
                    path="academic-staff/*"
                    element={
                      <Suspense fallback={<LoadingComponent />}>
                        <Routes>
                          <Route
                            index
                            path="/"
                            element={<Navigate to="home" />}
                          />
                          <Route
                            path="home"
                            element={<AcademicStaffComponent />}
                          />
                          <Route
                            path="loading"
                            element={<LoadingComponent />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/sda-uoj-system" />}
                          />
                        </Routes>
                      </Suspense>
                    }
                  />

                  <Route
                    path="non-academic-staff/*"
                    element={
                      <Suspense fallback={<LoadingComponent />}>
                        <Routes>
                          <Route
                            index
                            path="/"
                            element={<Navigate to="home" />}
                          />
                          <Route
                            path="home"
                            element={<NonAcademicStaffComponent />}
                          />
                          <Route
                            path="loading"
                            element={<LoadingComponent />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to="/sda-uoj-system" />}
                          />
                        </Routes>
                      </Suspense>
                    }
                  />

                  <Route path="*" element={<Navigate to="/sda-uoj-system" />} />
                </Routes>
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="/sda-uoj-system" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
