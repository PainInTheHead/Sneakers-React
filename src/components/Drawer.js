const Drawer = () => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-40 ">
          Корзина
          <img
            className="btn-remove"
            src="/img/icon/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="cartItems">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/Sn1.jpg"
              alt="Sn1"
            />
            <div className="mr-10">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 eu</b>
            </div>
            <img
              className="btn-remove"
              src="/img/icon/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>21498 eu</b>
            </li>
            <li className="d-flex">
              <span>Penya:5%</span>
              <div></div>
              <b>300 eu</b>
            </li>
          </ul>
          <button className="greenButton">
            Add to form
            <img src="/img/icon/arrow-total.svg" alt="ArrowTotal" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
