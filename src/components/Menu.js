import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/latte.jpg";
import raf from "../assets/raf.jpg";
import americano from "../assets/americano.jpg";

import useScrollReveal from "../hooks/useScrollReveal";

const drinks = [
  {
    name: "Капучино",
    price: "220 ₽",
    desc: "Классический кофе с нежной молочной пенкой",
    image: cappuccino,
  },
  {
    name: "Латте",
    price: "250 ₽",
    desc: "Мягкий вкус и насыщенный аромат",
    image: latte,
  },
  {
    name: "Раф",
    price: "290 ₽",
    desc: "Сливочный напиток с ванильными нотками",
    image: raf,
  },
  {
    name: "Американо",
    price: "180 ₽",
    desc: "Крепкий и бодрящий кофе",
    image: americano,
  },
];

export default function Menu() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="menu" ref={ref}>
      <h2 className={`reveal ${visible ? "show" : ""}`}>
        Наше меню
      </h2>

      <div className="menu-grid">
        {drinks.map((drink, index) => (
          <div
            key={drink.name}
            className={`card reveal ${visible ? "show" : ""}`}
            style={{
              transitionDelay: `${index * 120}ms`,
            }}
          >
            <img src={drink.image} alt={drink.name} />
            <h3>{drink.name}</h3>
            <p>{drink.desc}</p>
            <strong>{drink.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}