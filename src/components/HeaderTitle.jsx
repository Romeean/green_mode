import { useState, useEffect } from "react";
import mouse from "../images/icons/mouse_scroll.svg";

export function HeaderTitle({ benefitsRef }) {
  const [word, setWord] = useState("");
  // let stringTitle = "проєкти різної складності";

  // useEffect(() => {
  //   let currentIndex = 0; 
  //   const interval = setInterval(() => {
  //       if (currentIndex < stringTitle.length) {
  //         setWord((prev) => {
  //           prev += str[currentIndex]
  //           currentIndex++
  //         })
  //       }
  //       return null
  //     }, 150);

  //   return () => clearInterval(interval); 
  // }, []); 
  // Доделать - сделать анимцию появления слова
  
  return (
    <>
      <div className="header_title">
        <div className="header_title_main">
          <h1 style={{ color: "#45FB78" }}>GreenMode</h1>
          <h2>проєкти різної складності</h2>
        </div>
        <br />
        <button
          className="smooth_mouse"
          onClick={() => {
            benefitsRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <img src={mouse} />
        </button>
      </div>
    </>
  );
}
