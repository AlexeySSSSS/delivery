import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Header({ btn }) {
  return (
    <section className="header">
      <div className="header__up">
        <div className="header__logo">
          <img className="header__img" src={logo} alt="Лого"></img>
          <h1 className="header__text">FromBoard Delivery</h1>
        </div>
        <div className="header__info">
          <div className="header__price">
            <p className="header__paragraf">
              Доставляем товары из заграницы в Россию
            </p>
            <p className="header__paragraf">Стоимость от 550 рублей за заказ</p>
            <p className="header__paragraf">
              1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
            </p>
          </div>
          <div className="header__contact">
            <p className="header__number">+7 (800) 123 45-67</p>
            <p className="header__call">Звонки по России бесплатны</p>
          </div>
        </div>
      </div>
      <div className="header__down">
        <div className="header__button">
          <Link to="/" onClick={btn}>
            <button className="header__btn">Калькулятор</button>
          </Link>
          <Link to="/" onClick={btn}>
            <button className="header__btn">О нас</button>
          </Link>
          <Link to="/" onClick={btn}>
            <button className="header__btn">Гарантии</button>
          </Link>
          <Link to="/" onClick={btn}>
            <button className="header__btn">Отзывы</button>
          </Link>
        </div>
        <Link to="/">
          <button className="header__click">Оставить заявку</button>
        </Link>
      </div>
    </section>
  );
}

export default Header;
