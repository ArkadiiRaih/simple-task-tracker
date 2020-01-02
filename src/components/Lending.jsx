import React, { Fragment, useEffect } from "react";
import "./style/lending.scss";
import { animateCard } from "./style/card";
import { animatePicker, blurPage } from "./style/lending";
const Lending = () => {
  // it is bad, need to rewrite it in react with refs to DOM nodes
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
              Бла бла бла блабла блаблаблаб бла блабла блаблаблаб блаблабла
              блаблаблаб бла блабла блаблаблаб бла
            </p>
          </div>
        </div>
      </div>
      <div className="page page-2">
        <div className="card__group card__appearable">
          <div className="card ">
            <div className="card__header">блабла блаблабла</div>
            <div className="card__body">
              <p className="card__text">блабла блаблаблаб бла</p>
            </div>
          </div>
          <div className="card">
            <div className="card__header">Нблабла блаба</div>
            <div className="card__body">
              <p className="card__text">
                блабла блаблаблаб блаблабла блаблаблаб блаблабла блаблаблаб бла
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__header">блабла блаблабла</div>
            <div className="card__body">
              <p className="card__text">
                блабла блаблаблаб блаблабла блаблаблаб бла
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
