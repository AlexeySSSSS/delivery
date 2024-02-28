import React from "react";
import Garanty_0 from "../../../images/Garanty.png";
import Garanty_1 from "../../../images/Garanty_1.png";
import Garanty_2 from "../../../images/Garanty_2.png";
import Garanty_3 from "../../../images/Garanty_3.png";

function Garanty() {
  return (
    <section className="garanty">
      <div className="garanty__box">
        <h2 className="garanty__title">Гарантии качества</h2>
        <p className="garanty__text">
          Наши гарантии качества включают в себя полный спектр документов,
          необходимых для ввоза и вывоза товаров, а также для успешного бизнеса
          на мировом рынке. Мы предоставляем вам надёжность и уверенность
        </p>
        <div className="garanty__info">
          <div className="garanty__block">
            <img className="garanty__img" src={Garanty_0} alt="Гарантия" />
            <p className="garanty__prgf">Свидетельство о регистрации в РФ</p>
          </div>
          <div className="garanty__block">
            <img className="garanty__img" src={Garanty_1} alt="Гарантия" />
            <p className="garanty__prgf">Свидетельство о регистрации в США</p>
          </div>
          <div className="garanty__block">
            <img className="garanty__img" src={Garanty_2} alt="Гарантия" />
            <p className="garanty__prgf">Свидетельство о регистрации в Китае</p>
          </div>
          <div className="garanty__block">
            <img className="garanty__img" src={Garanty_3} alt="Гарантия" />
            <p className="garanty__prgf">
              Свидетельство о регистрации в Великобритнии
            </p>
          </div>
        </div>
      </div>
      <button className="garanty__btn">Показать больше документов</button>
    </section>
  );
}
export default Garanty;
