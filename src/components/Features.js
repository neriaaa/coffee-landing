export default function Features() {
  const features = [
    {
      title: "Свежая обжарка",
      text: "Используем только свежеобжаренные зерна премиального качества.",
    },
    {
      title: "Уютная атмосфера",
      text: "Идеальное место для работы, встреч и отдыха.",
    },
    {
      title: "Быстрое обслуживание",
      text: "Готовим напитки быстро без потери качества.",
    },
  ];

  return (
    <section id="features">
      <h2>Почему выбирают нас</h2>

      <div className="features-grid">
        {features.map((item) => (
          <div key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}