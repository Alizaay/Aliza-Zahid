import { NavLink, Outlet } from "react-router-dom";
import { Logo } from "../components/common/Logo";
import { Button } from "../components/ui/Button";
import { adminNav } from "../routes/routeConfig";
import { routePaths } from "../routes/routePaths";
import { cn } from "../utils/cn";
import { useAdminAuth } from "../pages/admin/AdminAuth";

export function AdminLayout() {
  const { logout } = useAdminAuth();

  return (
    <div className="min-h-screen bg-canvas lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-line bg-panel lg:min-h-screen lg:border-r lg:border-b-0">
        <div className="flex items-center justify-between px-5 py-5">
          <Logo />
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:overflow-visible">
          {adminNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === routePaths.admin}
              className={({ isActive }) =>
                cn(
                  "whitespace-nowrap rounded-xl px-4 py-3 text-sm",
                  isActive ? "bg-panel-elevated text-cyan" : "text-muted hover:text-ink",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden px-4 pb-6 lg:block">
          <Button to={routePaths.home} variant="secondary" className="w-full">
            View site
          </Button>
          <Button variant="ghost" className="mt-3 w-full" onClick={logout}>
            Sign out
          </Button>
        </div>
      </aside>
      <div>
        <header className="flex items-center justify-between border-b border-line px-5 py-4 lg:px-8">
          <div>
            <p className="text-xs tracking-[0.2em] text-cyan uppercase">AlizaDev CMS</p>
            <h1 className="font-display text-xl font-semibold">Content dashboard</h1>
          </div>
          <div className="flex gap-2 lg:hidden">
            <Button to={routePaths.home} variant="secondary" className="min-h-10 px-4 text-xs">
              Site
            </Button>
            <Button variant="ghost" className="min-h-10 px-4 text-xs" onClick={logout}>
              Out
            </Button>
          </div>
        </header>
        <main className="px-5 py-8 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
