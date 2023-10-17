import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Data
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/focaccia.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/margherita.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/spinaci.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/funghi.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/salamino.jpg?raw=true',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/prosciutto.jpg?raw=true',
    soldOut: false,
  },
];
//Data

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  // const style = {color: 'red', fontSize: '3rem'}
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            AAuthentic Italian cousin. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later =)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= openHour;

  // ? alert('We\'re currently open!') : alert ('Sorry, we\'re closed.')

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
