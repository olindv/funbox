import React, {useState} from 'react';
import cat from "./assets/cat.png";
import classnames from "classnames";
import "./Card.scss";

export function Card(props, {}) {
    const [state, setState] = useState({
        clicked: false
    })
    const handleClick = (e) => {
        const target = e.currentTarget;
        console.log(e.currentTarget, e.target);
        if (!e.target.classList.contains('card__item_bottom')){
            target.addEventListener('mouseover', () => {
                setState({...state, clicked: !state.clicked})
            }, {once: true})
        }
      };
    const {cardDescription,
        cardName,
        cardWith,
        cardConsist,
        cardWeight,
        cardBuy,
        cardBuyLink,
        cardContent,
        cardClassName
        } = props.cardList;
    return (
                <div className={classnames("card__item", state.clicked && cardClassName)} onClick={handleClick}>
                  <div className="card__item_wrap">
                    <div className="card__item_content">
                      <div className="card__item_description">
                        {cardDescription}
                      </div>
                      <div className="card__item_name">{cardName}</div>
                      <div className="card__item_with">{cardWith}</div>
                      <div className="card__item_consist">
                        {cardConsist.map((elem, index) => (
                          <p className="card__item_consist_content" key={index}>
                            {elem}
                          </p>
                        ))}
                      </div>
                      <div className="card__item_weight">
                        <p className="card__item_weight_number">{cardWeight}</p>
                        <p className="card__item_weight_text">кг</p>
                      </div>
                    </div>
                    <div className="card__item_img">
                      <img src={cat} alt="cat" />
                    </div>
                  </div>
                  {
                    !state.clicked ?
                    <div className="card__item_bottom">
                      {cardBuy}{" "}
                      {cardBuyLink && (
                        <a href="#" className="card__item_bottom_link">
                          {cardBuyLink}
                        </a>
                      )}
                    </div> :
                    <div className="card__item_bottom">
                      {cardContent}
                    </div>
                  }
                </div>


    )
}

export default Card;