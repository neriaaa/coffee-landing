import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal ${visible ? "show" : ""}`}
    >
      <h2>Связаться с нами</h2>

      <form className="contact-form">
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Сообщение"></textarea>

        <button type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
}