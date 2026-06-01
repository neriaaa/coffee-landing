import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`reveal ${visible ? "show" : ""}`}
    >
      <h2>О нас</h2>

      <p>
        Мы готовим кофе из тщательно отобранных зерен и создаём атмосферу
        уюта и спокойствия.
      </p>
    </section>
  );
}