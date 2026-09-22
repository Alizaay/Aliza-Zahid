import { createContext, useContext, useMemo, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authService } from "../../services/auth/authService";
import { getApiError } from "../../services/api/apiError";
import { routePaths } from "../../routes/routePaths";
import { TOKEN_KEY } from "../../utils/constants";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");
  const [admin, setAdmin] = useState(null);

  const value = useMemo(
    () => ({
      token,
      admin,
      isAuthenticated: Boolean(token),
      async login(credentials) {
        const data = await authService.login(credentials);
        localStorage.setItem(TOKEN_KEY, data.token);
        setToken(data.token);
        setAdmin(data.admin);
        return data;
      },
      logout() {
        localStorage.removeItem(TOKEN_KEY);
        setToken("");
        setAdmin(null);
      },
    }),
    [admin, token],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  return context;
}

export function RequireAdmin({ children }) {
  const { isAuthenticated } = useAdminAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={routePaths.adminLogin} replace state={{ from: location.pathname }} />;
  }
  return children;
}

export { getApiError };
