import useScrollReveal from "../hooks/useScrollReveal";

export default function Footer() {
  const [ref, visible] = useScrollReveal();

  return (
    <footer
      ref={ref}
      className={`reveal ${visible ? "show" : ""}`}
    >
      <p>© 2026 Brew & Bean</p>
    </footer>
  );
}