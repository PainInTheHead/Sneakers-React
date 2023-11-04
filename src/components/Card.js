const Card = (props) => {


  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/icon/unliked.svg" alt="unliked" />
      </div>
      <img
        className="imgsneak"
        width={133}
        height={112}
        src={props.image}
        alt=""
      />
      <h5>{props.title}</h5>
      <div className="cardBottom">
        <div className="d-flex flex-column">
          <span>ЦЕНА</span>
          <b>{props.prise}</b>
        </div>
        <button className="btn-plus" >
          <img src="/img/icon/btn-plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
