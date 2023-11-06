import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Data from "./data";

function App() {
  const [items, setItems] = React.useState([]);

  const [cardItems, setCardItems] = React.useState([])

  const [cardOpened, setCardOpened] = React.useState(false);

React.useEffect(()=> {
  fetch("https://65489c65dd8ebcd4ab233df6.mockapi.io/itemsCard")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
}, []);

const onAddToCard = (item) => {
  setCardItems([...cardItems, item])
}

  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items = {cardItems} onClickBack={() => setCardOpened(false)} />}
      <Header onClickCard={() => setCardOpened(true)} />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/Vector.svg" alt="Vector" />
            <input placeholder="Searching" />
          </div>
        </div>
        <div className="Sneakers d-flex justify-between">
          {items.map((obj) => (
            <Card
              title={obj.name}
              prise={obj.price}
              image={obj.image}
              onAddCard={(item) => onAddToCard(item)}
              onFavorite={() => console.log("Избранное")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
