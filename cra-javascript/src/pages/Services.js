import React from "react";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with React and modern technologies.",
      icon: "🌐",
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces and experiences.",
      icon: "🎨",
    },
    {
      title: "Consulting",
      description: "Technical consulting and architecture planning.",
      icon: "💡",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Services</h1>
        <p>We offer a range of services to help bring your ideas to life.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "800px",
            margin: "30px 0",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
                {service.icon}
              </div>
              <h3 style={{ margin: "10px 0", color: "#61dafb" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Services;
