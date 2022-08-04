import { ErrorBoundary, Fallback } from "components";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLanguage } from "./hooks";
import "./sass/index.scss";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: React.lazy(() => import("pages/Home")),
  },
  {
    path: "/forms",
    exact: true,
    name: "Forms",
    component: React.lazy(() => import("pages/Forms")),
  },
  {
    path: "/ForwardRef",
    exact: true,
    name: "Forward Ref",
    component: React.lazy(() => import("pages/ForwardRef")),
  },
];

function App() {
  const language = useLanguage();
  React.useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", language.lang);
    document.documentElement.setAttribute("dir", language.direction);
  }, [language]);

  return (
    <ErrorBoundary>
      <div>
        <React.Suspense
          fallback={
            <div className="vw-100 vh-100">
              <Fallback />
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
