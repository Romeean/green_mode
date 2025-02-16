import "../../css/Error.css";

import { Button } from "./Button";
import { Link } from "react-router-dom";

export function Error() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#151414",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="container">
          <div className="error_container">
            <div style={{width:'100%'}}>
              <h2 style={{ paddingRight: "80px", width: '100%' }}>Щось тут пішло не так . . . </h2>
              <p style={{width: "50%", paddingTop:"10px"}}>Ми не можемо знайти сторінки яку ви шукаєте. Найкращим виходои буде повернутись на головну сторінку!</p>
              <Link to="/"><Button name="Назад" /></Link>
            </div>
            <div>
              <p
                style={{
                  color: "#45FB78",
                  fontSize: "600px",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                }}
              >
                ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
