import React, { Fragment, useEffect } from "react";
import "./style/lending.scss";
import { animateCard } from "./style/card";
import { animatePicker, blurPage } from "./style/lending";
const Lending = () => {
  useEffect(() => {
    animatePicker();
    blurPage();
    animateCard();
  });
  return (
    <Fragment>
      <div className="picker_page">
        <button className="picker__item picker__item_active"></button>
        <button className="picker__item"></button>
        <button className="picker__item"></button>
        <button className="picker__item"></button>
      </div>
      <div className="page page_bg_blurable">
        <h1 className="page__title">TASK TRACKER</h1>
      </div>
      <div className="page page-1">
        <div className="card card__appearable">
          <div className="card__header">Create boards</div>
          <div className="card__body">
            <p className="card__text">
              Мы используем новейшие технологии в сферах разработки, обучения и
              управления. Заключив договор с нами вы увеличите
              производительность своего персонала в 100500 миллионов раз.
            </p>
          </div>
        </div>
      </div>
      <div className="page page-2">
        <div className="card__group card__appearable">
          <div className="card ">
            <div className="card__header">Наш тупорылый бот</div>
            <div className="card__body">
              <p className="card__text">Здравствуйте, чем я могу помочь?</p>
            </div>
          </div>
          <div className="card">
            <div className="card__header">Наш тупорылый клиент</div>
            <div className="card__body">
              <p className="card__text">
                Назначь сегодня встречу с персоналом на 9. Перенеси подписание
                сделки на завтра.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__header">Наш тупорылый бот</div>
            <div className="card__body">
              <p className="card__text">
                Хуй тебе мешок кожаный. Делай все сам.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page page-3"></div>
    </Fragment>
  );
};

export default Lending;
