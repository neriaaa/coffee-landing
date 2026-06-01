import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          transform: `translateY(${offset * 0.4}px)`,
        }}
      />

      <div className="hero-content">
        <h1>
          Настоящий кофе
          <br />
          для настоящих людей
        </h1>

        <p>
          Свежая обжарка • уютная атмосфера • авторские напитки
        </p>

        <button
          onClick={() =>
            document.getElementById("menu")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Смотреть меню
        </button>
      </div>
    </section>
  );
}