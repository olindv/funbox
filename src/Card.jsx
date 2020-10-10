import React from "react";
import cat from "./assets/cat.png";
import './Card.scss'
import classnames from 'classnames'

const cardList = [
  {
    cardDescription: "Сказочное заморское яство",
    cardName: "Нямушка",
    cardWith: "с фуа-гра",
    cardConsist: ["10 порций", "мышь в подарок"],
    cardWeight: "0,5",
    cardBottom:
      'Чего сидишь? Порадуй котэ,',
    cardBottomLink: 'купи.',
    cardClassName: "cards__item",
    id: 1,
  },
  {
    cardDescription: "Сказочное заморское яство",
    cardName: "Нямушка",
    cardWith: "с рыбой",
    cardConsist: ["40 порций", "2 мыши в подарок"],
    cardWeight: "2",
    cardBottom: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    cardClassName: "cards__item",
    id: 2,
  },
  {
    cardDescription: "Сказочное заморское яство",
    cardName: "Нямушка",
    cardWith: "с курой",
    cardConsist: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
    cardWeight: "5",
    cardBottom: "Печалька, с курой закончился.",
    cardClassName: "cards__item cards__item-disabled",
    id: 3,
  },

];

export function Card() {

    const handleClick = (e) => {
      e.preventDefault();
      const target = e.currentTarget;
      if(!target.classList.contains('cards__item-disabled')) {
          e.currentTarget.classList.toggle('cards__item-active')
      }
  }
  return (
    <div className="cards">
      <h2 className="cards__title">Ты&nbsp;сегодня покормил кота?</h2>
      <div className="cards__list">
        {cardList.map(
          ({
            cardDescription,
            cardName,
            cardWith,
            cardConsist,
            cardWeight,
            cardBottom,
            cardBottomLink,
            cardClassName,
            id,
          }) => (
            <div className={cardClassName} onClick={handleClick} key={id}>
              <div className="cards__item_wrap">
                <div className="cards__item_content">
                <div className="cards__item_description">{cardDescription}</div>
                <div className="cards__item_name">{cardName}</div>
                <div className="cards__item_with">{cardWith}</div>
                <div className="cards__item_consist">
                  {cardConsist.map((elem, index) => (
                    <p className="cards__item_consist_content" key={index}>{elem}</p>
                  ))}
                </div>
                <div className="cards__item_weight">
                  <p className="cards__item_weight_number">{cardWeight}</p>
                  <p className="cards__item_weight_text">кг</p>
                </div>
                </div>
                <div className="cards__item_img">
                  <img src={cat} alt="cat" />
                </div>

              </div>
                  <div className="cards__item_bottom">{cardBottom} {cardBottomLink && (<a href="#" className="cards__item_bottom_link">{cardBottomLink}</a>)}
                  </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Card;
