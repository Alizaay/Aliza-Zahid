import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { usePageTitle } from "../../hooks/usePageTitle";
import { routePaths } from "../../routes/routePaths";
import { getApiError, useAdminAuth } from "./AdminAuth";

export function AdminLogin() {
  const { login, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("alizadeveloper2@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  usePageTitle("Admin login");

  if (isAuthenticated) {
    return <Navigate to={location.state?.from || routePaths.admin} replace />;
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      await login({ email, password });
      toast.success("Welcome back.");
      navigate(location.state?.from || routePaths.admin, { replace: true });
    } catch (error) {
      toast.error(getApiError(error, "Unable to sign in."));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen place-items-center px-5">
      <Card className="w-full max-w-md">
        <p className="text-xs tracking-[0.22em] text-cyan uppercase">AlizaDev</p>
        <h1 className="mt-2 font-display text-3xl font-semibold">Dashboard login</h1>
        <p className="mt-2 text-sm text-muted">Manage images, projects, and site content from one place.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input id="email" className="field" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input id="password" type="password" className="field" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
