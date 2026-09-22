import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0B1830",
            color: "#F8FAFC",
            border: "1px solid #173B72",
          },
        }}
      />
    </BrowserRouter>
  );
}
