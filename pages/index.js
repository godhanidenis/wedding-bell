import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import LandingPage from "../components/sections/LandingPage";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}
