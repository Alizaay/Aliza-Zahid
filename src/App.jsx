import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeProvider";
import { AppRoutes } from "./routes/AppRoutes";

function AppShell() {
  const { isDark } = useTheme();

  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: isDark ? "#0B1830" : "#FFFFFF",
            color: isDark ? "#F8FAFC" : "#0B1B33",
            border: `1px solid ${isDark ? "#173B72" : "#C5D6EA"}`,
          },
        }}
      />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
