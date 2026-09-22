import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../common/ScrollToTop";
import { WhatsAppFloat } from "../common/WhatsAppFloat";
import { Navbar } from "../navigation/Navbar";
import { Footer } from "./Footer";
import { MainContainer } from "./MainContainer";

export function PageLayout() {
  return (
    <MainContainer>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-panel focus:px-4 focus:py-2">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MainContainer>
  );
}
