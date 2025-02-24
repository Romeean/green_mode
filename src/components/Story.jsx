import "../css/Story.css";

export function Story() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Наша Історія</h2>
        <div className="block_story" style={{ paddingTop: "5vh" }}>
          <div className="block_story_cell">
            <h2 style={{ color: "black", paddingLeft: "10px" }}>01</h2>
            <p
              style={{
                color: "black",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Наша історія розпочалася у 2014 році, коли ми з ентузіазмом
              взялися за навчання встановленню та обслуговуванню систем
              кондиціонування. Ми прагнули не просто освоїти ремесло, а створити
              фундамент для майбутньої компанії, що спеціалізуватиметься на
              якісних інженерних рішеннях.
            </p>
          </div>
          <div
            className="block_story_cell"
            style={{ backgroundColor: "#151414" }}
          >
            <h2 style={{ paddingLeft: "10px" }}>02</h2>
            <p
              style={{
                color: "white",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Хоча на той момент у нас ще не було великого досвіду, ми активно
              вивчали технології та вдосконалювали свої навички. Це стало першим
              кроком до формування команди професіоналів у сфері кліматичного
              обладнання.
            </p>
          </div>
          <div className="block_story_cell">
            <h2 style={{ color: "black", paddingLeft: "10px" }}>03</h2>
            <p
              style={{
                color: "black",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Розширення послуг призвело до збільшення кількості клієнтів. Тепер
              нашими рішеннями користувалися не тільки власники приватних
              будинків, а й компанії, які потребували ефективних кліматичних
              систем для офісів та виробничих приміщень
            </p>
          </div>
          <div
            className="block_story_cell"
            style={{ backgroundColor: "#151414" }}
          >
            <h2>04</h2>
            <p
              style={{
                color: "white",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              У 2023 році ми зробили ще один важливий крок – почали працювати з
              сонячними системами та резервним енергопостачанням. Це дало
              можливість клієнтам підвищити енергоефективність і забезпечити
              незалежність від зовнішніх джерел електроенергії.
            </p>
          </div>
          <div className="block_story_cell">
            <h2 style={{ color: "black", paddingLeft: "10px" }}>05</h2>
            <p
              style={{
                color: "black",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              Сьогодні ми пишаємося тим, що наш шлях, який розпочався з
              невеликих проєктів, привів нас до можливості пропонувати
              комплексні інженерні рішення у сфері вентиляції, опалення,
              кондиціювання та резервного живлення. Ми цінуємо довіру наших
              клієнтів і прагнемо надавати сучасні та якісні послуги. 🚀
            </p>
          </div>
          <div
            className="block_story_cell"
            style={{ backgroundColor: "#151414" }}
          >
            <h2 style={{ paddingLeft: "10px" }}>06</h2>
            <p
              style={{
                color: "white",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              2014 році, коли ми взялися за навчання встановленню та
              обслуговуванню систем кондиціонування. Ми прагнули не просто
              освоїти ремесло, а створити фундамент для компанії, що
              спеціалізується на якісних інженерних рішеннях.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
