import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const [, setHeightNavbar] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const [scrollTag, setScrollTag] = useState(null);

  const executeScroll = (scrollTag: any) => {
    document.querySelector(scrollTag).scrollIntoView();
    setScrollTag(null);
  };

  useEffect(() => {
    if (scrollTag !== null) {
      executeScroll(scrollTag);
    }
  }, [scrollTag]);

  return (
    <div className="bg-slate-200 dark:bg-slate-900">
      <motion.div
        className="progress"
        style={{
          scaleX: scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          transformOrigin: "0%",
          background: "#fff",
          zIndex: 1000,
        }}
      />
      {/* content */}
      <BrowserRouter basename="/my-personal-website">
        {/* <Navbar setHeightNavbar={setHeightNavbar} setScrollTag={setScrollTag} /> */}
        <Navbar setHeightNavbar={setHeightNavbar} setScrollTag={setScrollTag} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
