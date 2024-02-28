import React from "react";
import Group from "../../../images/Group.svg";
import Group_1 from "../../../images/Group_1.svg";
import Group_2 from "../../../images/Group_2.svg";
import Group_3 from "../../../images/Group_3.svg";
import Group_4 from "../../../images/Group_4.svg";
import Group_5 from "../../../images/Group_5.svg";

function Benefits() {
  return (
    <div className="benefits">
      <h2 className="benefits__title">Наши преимущества</h2>
      <div className="benefits__info">
        <div className="benefits__block">
          <div className="benefits__images">
            <img src={Group} className="benefits__img" alt="Картинка" />
          </div>
          <div className="benefits__prgf">
            <p className="benefits__paragraf">Растоможка груза</p>
            <p className="benefits__text">
              Мы берём на себя все формальности и бумажную волокиту, связанную
              с растаможкой груза
            </p>
          </div>
        </div>
        <div className="benefits__block">
          <div className="benefits__images">
            <img src={Group_1} className="benefits__img" alt="Картинка" />
          </div>
          <div className="benefits__prgf benefits__prgf_padding">
            <p className="benefits__paragraf">Надёжная упаковка</p>
            <p className="benefits__text">
              Все товары упаковываются нашими специалистами с особым вниманием
              к деталям, гарантируя, что они дойдут в безопасности и в отличном
              состоянии
            </p>
          </div>
        </div>
        <div className="benefits__block">
          <div className="benefits__images">
            <img src={Group_2} className="benefits__img" alt="Картинка" />
          </div>
          <div className="benefits__prgf">
            <p className="benefits__paragraf">Быстро и выгодно</p>
            <p className="benefits__text">
              Мы предлагаем быструю и выгодную доставку, чтобы вы могли
              насладиться покупками как можно скорее.
            </p>
          </div>
        </div>
        <div className="benefits__block">
          <div className="benefits__images">
            <img src={Group_3} className="benefits__img" alt="Картинка" />
          </div>
          <div className="benefits__prgf">
            <p className="benefits__paragraf">Удобный сервис</p>
            <p className="benefits__text">
              Стремимся сделать процесс доставки максимально удобным для вас,
              чтобы опыт остался приятным и беззаботным
            </p>
          </div>
        </div>
        <div className="benefits__block">
          <div className="benefits__images">
            <img src={Group_4} className="benefits__img" alt="Картинка" />
          </div>
          <div className="benefits__prgf">
            <p className="benefits__paragraf">Прозрачность работы</p>
            <p className="benefits__text">
              Мы предоставляем полный контроль над каждым этапом доставки,
              от момента заказа до момента прибытия заказа
            </p>
          </div>
        </div>
        <div className="benefits__block">
          <div className="benefits__images">
            <img src={Group_5} className="benefits__img" alt="Картинка" />
          </div>
          <div className="benefits__prgf">
            <p className="benefits__paragraf">Страхование груза</p>
            <p className="benefits__text">
              Наше страхование обеспечивает полную защиту и покрытие почти все
              неприятные и неожиданные ситуации
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Benefits;
