import "../css/base/page.css";
import "../css/Header.css";
import { Header } from "../components/Header";
import { ContactUs } from "../components/ContactUs";
import { Questions } from "../components/Questions";
import { Footer } from "../components/Footer";
import backgroundPhoto from "../images/man_contact.jpg";

export function ContactUsPage() {
  return (
    <>
      <div className="home_page">
        <div className="main_part">
          <Header />
          <div className="image_container_darker_contact_us_page" />
          <img src={backgroundPhoto} className="image_container"></img>
          <div
            style={{
              height: "100vh",
            }}
          >
            <ContactUs paddingUp={"30vh"} />
          </div>
          <div>
            <Questions paddingDown="20vh" />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
