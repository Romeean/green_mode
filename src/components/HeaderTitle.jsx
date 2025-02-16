import { Location, Phone } from "./Photos";

import { Service } from "./Service";
import location from "../images/icons/location.svg";
import mouse from "../images/icons/mouse_scroll.svg";

export function HeaderTitle({ benefitsRef }) {
  return (
    <>
      <div className="header_title">
        <div className="header_title_main">
          <h1 style={{ color: "#45FB78" }}>GreenMode</h1>
          <h2>проєкти різної складності</h2>
        </div>
        <br />
        <button className="smooth_mouse"
          onClick={ () => {
            benefitsRef.current?.scrollIntoView({
              behavior: "smooth"
            })
          }}
          >
          <img src={mouse} />
        </button>
      </div>
    </>
  );
}
