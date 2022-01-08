import { useEffect, useState } from "react";

const checkMobile = () => {
  return window.innerWidth <= 700;
}

export default function useCheckMobile() {
  const [ isMobile, setIsMobile ] = useState(checkMobile())

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}