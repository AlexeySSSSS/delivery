import React from "react";
import { Link } from "react-router-dom";
import logo_footer from "../../images/logo_footer.svg";

function Footer({ btn_footer }) {
  return (
    <section className="footer">
      <div className="footer__box">
        <div className="footer__info">
          <div className="footer__logo">
            <img className="footer__img" src={logo_footer} alt="лого" />
          </div>
          <div className="footer__nav">
            <Link to="/" onClick={btn_footer}>
              <button className="footer__btn">Калькулятор</button>
            </Link>
            <Link to="/" onClick={btn_footer}>
              <button className="footer__btn">О нас</button>
            </Link>
            <Link to="/" onClick={btn_footer}>
              <button className="footer__btn">Гарантии</button>
            </Link>
            <Link to="/" onClick={btn_footer}>
              <button className="footer__btn">Отзывы</button>
            </Link>
          </div>
          <div className="footer__tel">
            <p className="footer__number">+7 (800) 123 45-67</p>
            <p className="footer__call">Звонки по России бесплатны</p>
          </div>
        </div>
        <div className="footer__title">
          <p className="footer__text">
            НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то,
            что цены носят информационный и ознакомительный характер, а значит
            ни в какой мере не являются публичной офертой, которая определена
            в ст. 437 ГК РФ. Вся информация на сайте может содержать неточности,
            орфографические и иные ошибки, она не является полной, окончательно
            и исчерпывающей
          </p>
          <p className="footer__prgf">Симакин Алексей</p>
        </div>
      </div>
    </section>
  );
}
export default Footer;
