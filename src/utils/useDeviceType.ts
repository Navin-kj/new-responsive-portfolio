import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isBrowser, setIsBrowser] = useState(true);

  const updateDeviceType = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
      setIsBrowser(false);
    } else {
      setIsMobile(false);
      setIsBrowser(true);
    }
  };

  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return { isMobile, isBrowser };
};

export default useDeviceType;
