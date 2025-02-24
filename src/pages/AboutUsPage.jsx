import { Header } from "../components/Header";
import { Story } from "../components/Story";
import { Footer } from "../components/Footer";

export function AboutUsPage() {
  return (
    <>
      <div className="home_page">
        <div className="main_part">
          <Header />
        </div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#151414",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Story />
        </div>
        <Footer />
      </div>
    </>
  );
}
