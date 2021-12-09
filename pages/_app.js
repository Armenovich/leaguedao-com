import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import "../styles/Global.scss";



function MyApp({ Component, pageProps }) {
  const [desktopSize, setDesktopSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  const detectDesktopResolutionHandler = () => {
    if (window.innerWidth <= 425) {
      setDesktopSize({ isMobile: true, isTablet: false, isDesktop: false });
    } else if (window.innerWidth <= 960 && window.innerWidth >= 426) {
      setDesktopSize({ isMobile: false, isTablet: true, isDesktop: false });
    } else {
      setDesktopSize({ isMobile: false, isTablet: false, isDesktop: true });
    }
  };

  React.useEffect(() => {
    if (window.innerWidth <= 425) {
      setDesktopSize({ isMobile: true, isTablet: false, isDesktop: false });
    } else if (window.innerWidth <= 960 && window.innerWidth >= 426) {
      setDesktopSize({ isMobile: false, isTablet: true, isDesktop: false });
    } else {
      setDesktopSize({ isMobile: false, isTablet: false, isDesktop: true });
    }
    window.addEventListener("resize", detectDesktopResolutionHandler);

    return () => {
      window.removeEventListener("resize", detectDesktopResolutionHandler);
    };
  }, []);


  return (
    <div className="root">
      <Header {...pageProps} />
      <Component {...pageProps} desktopSize={desktopSize} />
      <Footer {...pageProps} />
    </div>
  );
}


export default MyApp;
