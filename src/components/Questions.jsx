import "../css/Questions.css";
import question_icon from "../images/icons/QuestionIcon.svg";

export function Questions({ paddingUp, paddingDown }) {
  return (
    <>
      <div style={{ backgroundColor: "#151414", paddingTop:{paddingUp}, paddingBottom:{paddingDown} }}>
        <div  className="container">
          <h2>
            Поширенні <span style={{ color: "#45FB78" }}>Запитання</span>
          </h2>
          <div className="section_of_question">
            <div className="section_questions_answer">
              <div>
                <img src={question_icon} />
              </div>
              <div>
                <h4>Як вибрати потужність резервного джерела живлення?</h4>
                <p className="subtitle_questions_answer">
                  Для розрахунку потужності системи резервного живлення потрібно
                  визначити сумарну споживану потужність усіх пристроїв, які
                  будуть під'єднані до системи, і додати запас (зазвичай
                  20-30%). Це допоможе уникнути перевантаження системи.
                </p>
              </div>
            </div>
            <div className="component_questions_answer">
              <div>
                <img src={question_icon} />
              </div>
              <div className="text_block_questions_answer">
                <h4>Які фактори впливають на ефективність теплового насоса?</h4>
                <p className="subtitle_questions_answer">
                  Ефективність залежить від температури зовнішнього повітря,
                  якості теплоізоляції будівлі та типу обраної системи насоса
                  (повітряний або геотермальний).
                </p>
              </div>
            </div>
            <div className="component_questions_answer">
              <div>
                <img src={question_icon} />
              </div>
              <div className="text_block_questions_answer">
                <h4>Які переваги встановлення сонячної електростанції?</h4>
                <p className="subtitle_questions_answer">
                  Сонячні електростанції знижують витрати на електроенергію,
                  забезпечують екологічність та підвищують енергетичну
                  незалежність домогосподарства.
                </p>
              </div>
            </div>
            <div className="component_questions_answer">
              <div>
                <img src={question_icon} />
              </div>
              <div className="text_block_questions_answer">
                <h4 className="title_questions_answer">
                  На що звертати увагу при виборі системи вентиляції?
                </h4>
                <p className="subtitle_questions_answer">
                  Важливо враховувати обсяг повітря, необхідний для якісного
                  повітрообміну, рівень шуму та енергоефективність обладнання.
                </p>
              </div>
            </div>
            <div className="component_questions_answer">
              <div>
                <img src={question_icon} />
              </div>
              <div className="text_block_questions_answer">
                <p className="title_questions_answer">
                  Як обрати потужність системи опалення для будинку?
                </p>
                <p className="subtitle_questions_answer">
                  Для розрахунку враховують площу приміщення, тепловтрати через
                  стіни, вікна й дах, а також кліматичні умови регіону.
                </p>
              </div>
            </div>
            <div className="component_questions_answer">
              <div>
                <img src={question_icon} />
              </div>
              <div className="text_block_questions_answer">
                <h3 className="title_questions_answer">
                  Як правильно розмістити кондиціонер у приміщенні?
                </h3>
                <p className="subtitle_questions_answer">
                  Розташування має виключати прямі потоки повітря на людей,
                  забезпечувати вільну циркуляцію й доступ до блоку для
                  обслуговування.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
