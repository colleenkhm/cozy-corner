import Header from "./routes/Header";
import Footer from "./routes/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
