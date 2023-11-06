import React from "react";

const Card = ({ title, image, prise, onAddCard, onFavorite }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onAddCard({ title, image, prise });
    setIsAdded(!isAdded);
  };

  const [isLiked, setIsLiked] = React.useState(false);
  const onCLickLiked = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="card">
      <div className="favorite">
        <img
          src={isLiked ? "/img/icon/liked.svg" : "/img/icon/unliked.svg"}
          alt="unliked"
          onClick={onCLickLiked}
        />
      </div>
      <img className="imgsneak" width={133} height={112} src={image} alt="" />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div className="d-flex flex-column">
          <span>ЦЕНА</span>
          <b>{prise}</b>
        </div>
        <button className="btn-plus">
          <img
            src={isAdded ? "/img/icon/btn-green.svg" : "/img/icon/btn-plus.svg"}
            alt="Plus"
            onClick={onClickPlus}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
