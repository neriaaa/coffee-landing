import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <h2>Brew & Bean ☕</h2>

        {/* бургер */}
        <button className="burger" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={open ? "nav active" : "nav"}>
          <a href="#about" onClick={() => setOpen(false)}>О нас</a>
          <a href="#menu" onClick={() => setOpen(false)}>Меню</a>
          <a href="#contact" onClick={() => setOpen(false)}>Контакты</a>
        </nav>
      </header>

      {/* 🔥 overlay */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}