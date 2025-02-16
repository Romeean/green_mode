import "../css/ContactUs.css";

import { useForm } from "react-hook-form";
import { Button } from "./UI components/Button";
import email from "../images/icons/EmailForChat.svg";
import phone from "../images/icons/phone-519.svg";
import { useState } from "react";

export function ContactUs({ paddingUp, paddingDown }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [notificationMessage, setNotificationMessage] = useState("");

  const sendMessage = async (data) => {
    data.access_key = "4d04926f-f400-4bdb-8464-c98ada8cbb25";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setNotificationMessage("Ваше повідомлення успішно надіслано!");
        setTimeout(() => setNotificationMessage(""), 3000);
        reset(); // Сбрасываем форму после успешной отправки
      } else {
        setNotificationMessage(
          "Сталася помилка під час надсилання повідомлення."
        );
        setTimeout(() => setNotificationMessage(""), 3000);
      }
    } catch (error) {
      setNotificationMessage(
        "Сталася помилка під час надсилання. Спробуйте пізніше."
      );
      setTimeout(() => setNotificationMessage(""), 3000);
    }
  };

  return (
    <div
      className="container"
      style={{ paddingTop: paddingUp, paddingBottom: paddingDown }}
    >
      <div className="contact_us_block">
        <div className="background_text">
          <h2>Залишились питання?</h2>
          <p style={{ paddingTop: "10px" }}>
            Ви можете залишити свої контактні дані для зворотного зв’язку або
            ввести їх вручну. Наші фахівці зв’яжуться з вами у найкоротший
            термін для надання необхідної інформації чи консультації.
          </p>
          <div style={{ paddingTop: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={phone} alt="phone" />
              <p>+068 889 3445</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={phone} alt="phone" />
              <p>+097 364 9765</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={email} alt="email" />
            <p style={{ alignItems: "center" }}>greenmodecompany@gmail.com</p>
          </div>
        </div>
        <div className="form">
          <form
            onSubmit={handleSubmit(sendMessage)}
            className="background_form"
          >
            <div
              className="inputs_form"
              style={{ paddingLeft: "20px", paddingTop: "20px" }}
            >
              <h2 style={{ color: "black" }}>Форма зворотнього зв'язку</h2>

              <input
                className="input_line"
                placeholder="Ім'я"
                {...register("name", { required: "Введіть ім'я" })}
              />
              {errors.name && (
                <p className="error_message">{errors.name.message}</p>
              )}

              <input
                className="input_line"
                placeholder="Номер телефону"
                {...register("phoneNumber", {
                  required: "Введіть номер телефону",
                  pattern: {
                    value: /^[0-9, -]+$/,
                    message: "Лише цифри дозволені",
                  },
                })}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                }
              />
              {errors.phoneNumber && (
                <p className="error_message">{errors.phoneNumber.message}</p>
              )}

              <textarea
                className="text_area_line"
                placeholder="Опишіть ваш запит"
                maxLength="250"
                {...register("problem", {
                  required: "Поле обов’язкове для заповнення",
                })}
              ></textarea>
              {errors.problem && (
                <p className="error_message">{errors.problem.message}</p>
              )}
            </div>

            <div
              style={{
                display: "inline-block",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Button name="Відправити" type="submit" />
            </div>
          </form>

          {notificationMessage && (
            <div className="notification">{notificationMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}
