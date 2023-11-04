const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/icon/unliked.svg" alt="unliked" />
      </div>
      <img
        className="imgsneak"
        width={133}
        height={112}
        src="/img/sneakers/Sn1.jpg"
        alt=""
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardBottom">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>12 999 ue</b>
        </div>
        <button className="btn-plus">
          <img src="/img/icon/btn-plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
