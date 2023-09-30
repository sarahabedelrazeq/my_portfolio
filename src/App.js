import { ErrorBoundary, Fallback } from "components";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLanguage, useTheme } from "./hooks";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: React.lazy(() => import("pages/Home")),
  },
  // {
  //   path: "/forms",
  //   exact: true,
  //   name: "Forms",
  //   component: React.lazy(() => import("pages/Forms")),
  // },
  {
    path: "/digital-agency",
    exact: true,
    name: "Digital Agency",
    component: React.lazy(() => import("pages/DigitalAgency")),
  },
  // {
  //   path: "/ForwardRef",
  //   exact: true,
  //   name: "Forward Ref",
  //   component: React.lazy(() => import("pages/ForwardRef")),
  // },
  // {
  //   path: "/frontend",
  //   exact: true,
  //   name: "frontend",
  //   component: React.lazy(() => import("pages/Frontend")),
  // },
  // {
  //   path: "/frontend/:header",
  //   exact: true,
  //   name: "frontend2",
  //   component: React.lazy(() => import("pages/Frontend2")),
  // },
];

function App() {
  const language = useLanguage();
  const theme = useTheme();
  const  { pathname } = useLocation()

  React.useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", language.lang);
    document.documentElement.setAttribute("dir", language.direction);
    document.documentElement.setAttribute("class", "theme-" + theme.name);
  }, [language, theme]);

  return (
    <ErrorBoundary>
      <div>
        <React.Suspense
          fallback={
            <div className="vw-100 vh-100">
              <Fallback color={pathname === '/digital-agency' && "#f81f01"} />
            </div>
          }
        >
          <Routes basename="/">
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.component />}
                  />
                )
              );
            })}
          </Routes>
        </React.Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
