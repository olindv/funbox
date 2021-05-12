import React from "react";
import "./CardList.scss";
import Card from './Card'


const cardList = [
  {
    cardDescription: "Сказочное заморское яство",
    cardName: "Нямушка",
    cardWith: "с фуа-гра",
    cardConsist: ["10 порций", "мышь в подарок"],
    cardWeight: "0,5",
    cardBuy: "Чего сидишь? Порадуй котэ,",
    cardBuyLink: "купи.",
    cardContent: "Печень утки разварная с артишоками.",
    cardClassName: "card__item-active",
    id: 1,
  },
  {
    cardDescription: "Сказочное заморское яство",
    cardName: "Нямушка",
    cardWith: "с рыбой",
    cardConsist: ["40 порций", "2 мыши в подарок"],
    cardWeight: "2",
    cardBuy: "Чего сидишь? Порадуй котэ,",
    cardBuyLink: "купи.",
    cardContent: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    cardClassName: "card__item-active",
    id: 2,
  },
  {
    cardDescription: "Сказочное заморское яство",
    cardName: "Нямушка",
    cardWith: "с курой",
    cardConsist: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
    cardWeight: "5",
    cardBuy: "Чего сидишь? Порадуй котэ,",
    cardBuyLink: "купи.",
    cardContent: "Печалька, с курой закончился.",
    cardClassName: "card__item-disabled",
    id: 3,
  },
];

export function CardList() {
  return (
    <div className="cards">
      <h2 className="cards__title">Обкормленный котофей</h2>
      <div className="cards__list card">
        {cardList.map(
          ({
            cardDescription,
            cardName,
            cardWith,
            cardConsist,
            cardWeight,
            cardBuy,
            cardBuyLink,
            cardContent,
            cardClassName,
            id,
          }) => (
            <Card key={id}cardList={{cardDescription,
              cardName,
              cardWith,
              cardConsist,
              cardWeight,
              cardBuy,
              cardBuyLink,
              cardContent,
              cardClassName
              }}/>
          )
        )}
      </div>
    </div>
  );
}

export default CardList;
