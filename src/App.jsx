import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "@/assets/css/global.css";
import Navbar from "@/componenets/Navbar";
import Footer from "@/componenets/Footer";
import Home from "@/pages/Home";
import VexUTeam from "@/pages/VexUTeam";
import Team from "@/pages/Team";
import Sponsors from "@/pages/Sponsors";
import RoboRowdy from "@/pages/RoboRowdy";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "./componenets/ScrollToTop";

function App() {
  document.documentElement.style.setProperty("--teamgreen", "#FD7803");

  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar?.classList.add("scroll-override");
      } else {
        navbar?.classList.remove("scroll-override");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollBy(0, -100);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    const navbarNav = document.getElementById("navbarNav");
    const customToggler = document.querySelector(".custom-toggler");

    const handleCollapseShow = () => {
      customToggler?.classList.remove("collapsed");
    };

    const handleCollapseHide = () => {
      customToggler?.classList.add("collapsed");
    };

    navbarNav?.addEventListener("show.bs.collapse", handleCollapseShow);
    navbarNav?.addEventListener("hide.bs.collapse", handleCollapseHide);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
      navbarNav?.removeEventListener("show.bs.collapse", handleCollapseShow);
      navbarNav?.removeEventListener("hide.bs.collapse", handleCollapseHide);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vexu-team" element={<VexUTeam />} />
        <Route path="/team" element={<Team />} />
        <Route path="/RoboRowdy" element={<RoboRowdy />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
