import React from "react";
import Vector from "../../../images/Vector.svg";
import Vector_1 from "../../../images/Vector_1.svg";
import Svg from "../../../images/Svg.svg";

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__left">
        <button className="revies__btn">
          <img className="reviews__left_img" src={Vector} alt="Лево" />
        </button>
      </div>
      <div className="reviews__info">
        <h2 className="reviews__title">Отзывы</h2>
        <div className="reviews__block">
          <div className="reviews__content">
            <p className="reviews__text">
              Я заказала последний iPhone из США через ваш сервис, и доставка
              прошла быстро и без каких‑либо проблем. Гарантии качества
              и надёжная упаковка сделали мой опыт покупки невероятно позитивным
            </p>
            <div className="reviews__box">
              <p className="reviews__prgf">Анна</p>
              <img className="revies__svg" src={Svg} alt="Галки" />
            </div>
          </div>
          <div className="reviews__content">
            <p className="reviews__text">
              Я уже несколько лет заказываю дизайнерскую одежду из Франции
              через ваш сервис, и он никогда меня не подводил. Важно иметь
              надёжную компанию, которая позаботится о вашем заказе
              и предоставит все необходимые документы для ввоза в Россию
            </p>
            <div className="reviews__box">
              <p className="reviews__prgf">Алексей</p>
              <img className="revies__svg" src={Svg} alt="Галки" />
            </div>
          </div>
        </div>
      </div>
      <div className="reviews__right">
        <button className="revies__btn">
          <img className="reviews__right_img" src={Vector_1} alt="Право" />
        </button>
      </div>
    </section>
  );
}

export default Reviews;
