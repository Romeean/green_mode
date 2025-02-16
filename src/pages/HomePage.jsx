import react from "react";
import { useRef } from "react";

import { ContactUs } from "../components/ContactUs";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeaderTitle } from "../components/HeaderTitle";

import { Service } from "../components/Service";
import backgroundPhoto from "../images/main_photo.png";

export function HomePage() {
  const benefitsRef = useRef(null);
  return (
    <>
      <div className="home_page">
        <div className="main_part">
          <Header />
          <div className="image_container_darker" />
          <img src={backgroundPhoto} className="image_container"></img>
        </div>
        <div className="container">
          <HeaderTitle benefitsRef={benefitsRef} />
        </div>
        <div className="container"></div>
        {/* services */}
        <div className="services_part">
          <Service benefitsRef={benefitsRef} />
        </div>
        <div className="about_us_part">
          <AboutUs />
        </div>
        <div className="contact_us_part">
          <ContactUs paddingUp="35vh" paddingDown="20vh" />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
