import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Остались вопросы?</h2>
      <form type="submit" name="contact__form" className="contact__form">
        <div className="contact__box">
          <input
            type="text"
            className="contact__input"
            name="contact__name"
            placeholder="Имя"
          ></input>
          <input
            type="email"
            className="contact__input"
            name="contact__mail"
            placeholder="Почта"
          ></input>
          <input
            type="tel"
            className="contact__input"
            name="contact__number"
            placeholder="Телефон"
          ></input>
          <input
            type="text"
            className="contact__input"
            name="contact__text"
            placeholder="Тема вопроса"
          ></input>
        </div>
        <textarea
          type="text"
          className="contact__prgf"
          name="contact__prgf"
          placeholder="Сообщение..."
        ></textarea>
        <button className="contact__button">Оставить заявку</button>
      </form>
    </section>
  );
}

export default Contact;
