import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { Service } from "../components/Service.jsx";

export function ServicePage() {
  return (
    <>
      <div className="home_page">
        <div className="main_part">
          <Header />
        </div>
        <div
          style={{
            backgroundColor: "#151414",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#151414",
          }}
        >
          <Service />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
