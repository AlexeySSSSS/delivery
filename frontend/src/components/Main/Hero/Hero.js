import React from "react";

import Rectangle from "../../../images/Rectangle.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__info">
        <h2 className="hero__title">
          Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
        </h2>
        <p className="hero__text">
          Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
          позволяет вам легко и удобно заказывать товары со всего
          <br />
          мира и получать их в России
        </p>
        <img src={Rectangle} className="hero__img" alt="фото" />
      </div>
      <div className="hero__calc">
        <p className="hero__delivery">Калькулятор доставки</p>
        <p className="hero__paragraf">
          Посчитайте, сколько будет стоить перевозка покупки из зарубежа
        </p>
        <form type="submit" className="hero__form" name="hero_form">
          <input
            name="input_name"
            className="hero__name"
            placeholder="Имя"
            type="text"
          />
          <div className="hero__block">
            <input
              name="input_mail"
              type="email"
              placeholder="Почта"
              className="hero__input"
            />
            <input
              name="input_number"
              type="tel"
              placeholder="Телефон"
              className="hero__input"
            />
            <input
              name="input_square"
              type="text"
              placeholder="Общая площадь, м²"
              className="hero__input"
            />
            <input
              name="input_weight"
              type="text"
              placeholder="Вес, кг"
              className="hero__input"
            />
            <input
              name="input_country"
              type="text"
              placeholder="Страна покупки"
              className="hero__input"
            />
            <input
              name="input_city"
              type="text"
              placeholder="Город покупки"
              className="hero__input"
            />
            <input
              name="input_area"
              type="text"
              placeholder="Область доставки"
              className="hero__input"
            />
            <input
              name="input_delivery"
              type="text"
              placeholder="Город доставки"
              className="hero__input"
            />
          </div>
          <button className="hero__btn">Заказать расчёт</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
