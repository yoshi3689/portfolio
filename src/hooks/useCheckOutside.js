// import { useEffect, useState } from "react";

// export default function useCheckOutside(ref) {
//   const [ isOutside, setIsOutside ] = useState
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       return (ref.current && ref.current.contains(e.target));
//     }

//     window.addEventListener('click', handleOutsideClick);

//     return () => window.removeEventListener('click', handleOutsideClick);
//   }, [ref]);

//   return ;
// }