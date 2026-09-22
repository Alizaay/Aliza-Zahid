import { routePaths } from "./routePaths";

export const publicRoutes = [
  { path: routePaths.home, label: "Home" },
  { path: routePaths.projects, label: "Projects" },
];

export const adminNav = [
  { label: "Overview", path: routePaths.admin },
  { label: "Profile", path: routePaths.adminProfile },
  { label: "Experience", path: routePaths.adminExperience },
  { label: "Projects", path: routePaths.adminProjects },
  { label: "Services", path: routePaths.adminServices },
  { label: "Technologies", path: routePaths.adminTechnologies },
  { label: "Contact", path: routePaths.adminContact },
  { label: "Media", path: routePaths.adminMedia },
];
