import "../css/base/page.css";
import { Header } from "../components/Header";
import { ContactUs } from "../components/ContactUs";
import { Questions } from "../components/Questions";
import backgroundPhoto from "../images/man_contact.jpg";

export function ContactUsPage() {
  return (
    <>
      <div className="contact_us_page">
        <div>
          <div className="main_part">
            <Header />
            <div className="image_container_darker_contact_us_page" />
            <img src={backgroundPhoto} className="image_container"></img>
          </div>
          <div>
            <ContactUs paddingUp={"30vh"} />
          </div>
          <div className="contact_us_page">
            <Questions paddingUp="100px"/>
          </div>
        </div>
      </div>
    </>
  );
}
