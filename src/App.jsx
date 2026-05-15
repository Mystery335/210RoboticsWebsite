import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import '@/assets/css/global.css'
import Navbar from '@/componenets/Navbar'
import Footer from '@/componenets/Footer'
import Home from '@/pages/Home'
import Team from '@/pages/Team'
import Sponsors from '@/pages/Sponsors'
import Outreach from '@/pages/Outreach'
import Headlines from '@/pages/Headlines'
import RoboRowdy from '@/pages/RoboRowdy'
import RobotDetail from '@/pages/RobotDetail'
import About from '@/pages/About'
import VEXU from '@/pages/About/VexU'
import History from '@/pages/About/History'
import NotFound from '@/pages/NotFound'

function App() {
  const location = useLocation()
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('scroll-override');
      } else {
        navbar?.classList.remove('scroll-override');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -100);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    const navbarNav = document.getElementById('navbarNav');
    const customToggler = document.querySelector('.custom-toggler');

    const handleCollapseShow = () => {
      customToggler?.classList.remove('collapsed');
    };

    const handleCollapseHide = () => {
      customToggler?.classList.add('collapsed');
    };

    navbarNav?.addEventListener('show.bs.collapse', handleCollapseShow);
    navbarNav?.addEventListener('hide.bs.collapse', handleCollapseHide);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
      navbarNav?.removeEventListener('show.bs.collapse', handleCollapseShow);
      navbarNav?.removeEventListener('hide.bs.collapse', handleCollapseHide);
    };
  }, []);

  return (
    <>
      <Navbar tinted={location.pathname !== '/'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} /> 
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/headlines" element={<Headlines />} />
        <Route path="/RoboRowdy" element={<RoboRowdy />} />
        <Route path="/robots/:year" element={<RobotDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/vexu" element={<VEXU />} />
        <Route path="/about/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;