import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../Styles/Scrolltop.css";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button className="scroll-btn" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;