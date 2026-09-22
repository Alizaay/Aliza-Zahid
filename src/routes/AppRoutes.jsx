import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { ProjectDetails } from "../pages/Projects/ProjectDetails";
import { ProjectsPage } from "../pages/Projects/ProjectsPage";
import { routePaths } from "./routePaths";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routePaths.home} element={<Home />} />
        <Route path={routePaths.projects} element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
