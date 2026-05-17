import Header from "./routes/Header";
import Footer from "./routes/Footer";
import "./styles/AppLayout.css";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
