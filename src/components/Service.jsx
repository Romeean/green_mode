import "../css/Service.css";

import icon_solarsystem from "../images/icons/main_services_solar_system_logo.svg";
import icon_heating from "../images/icons/main_services_heating.svg";
import icon_ventilation from "../images/icons/main_services_ventilation_icon.svg";


export function Service( { benefitsRef } ) {
  
  return (
    <>
      <div className="service_title" ref={benefitsRef}>
        <h2>
          Ми не просто монтуємо системи резервного живлення
          <br />
          Ми створюємо
          <span style={{ color: "#45FB78", paddingLeft: "9px" }}>
            Надійне Майбутнє
          </span>
        </h2>
      </div>
      <div className="service_block">
        <div className="container_of_priorities">
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img
                loading="lazy"
                className="icon_image"
                src={icon_solarsystem}
                alt="notfound"
              ></img>
              <h4 style={{ paddingLeft: "28px", paddingTop: "10px" }}>
                Сонячні електростанції та ДБЖ
              </h4>
              <p style={{ paddingLeft: "28px", paddingTop: "5px" }}>
                Наявність власного живлення - ключовий елемент надійності та
                стабільності в наш складний час.
              </p>
              {/* <Button /> */}
            </div>
          </div>
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img
                loading="lazy"
                className="icon_image"
                src={icon_heating}
                alt="notfound"
              ></img>
              <h4 style={{ paddingLeft: "28px", paddingTop: "10px" }}>
                Теплові насоси та Опалення
              </h4>
              <p style={{ paddingLeft: "28px", paddingTop: "5px" }}>
                Опалення — незамінний компонент нашого життя, і ми пропонуємо
                вирішення цього завдання різними способами.
              </p>
              {/* <Button /> */}
            </div>
          </div>
          <div className="background_of_priorities">
            <div className="icon_of_priorities">
              <img
                loading="lazy"
                className="icon_image"
                src={icon_ventilation}
                alt="notfound"
              ></img>
              <h4 style={{ paddingLeft: "28px", paddingTop: "10px" }}>
                Вентиляція та Кондиціонування
              </h4>
              <p style={{ paddingLeft: "28px", paddingTop: "5px" }}>
                Чистота та циркуляція повітря здатні зробити приміщення
                комфортним. Дозвольте собі дихати вільно.
              </p>
              {/* <Button /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
