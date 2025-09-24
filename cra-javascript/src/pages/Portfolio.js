import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool for teams",
      tech: ["React", "Firebase", "Material-UI"],
      status: "In Progress",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with interactive charts",
      tech: ["React", "Chart.js", "Weather API"],
      status: "Completed",
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media insights",
      tech: ["React", "D3.js", "Express.js"],
      status: "Planning",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4CAF50";
      case "In Progress":
        return "#FF9800";
      case "Planning":
        return "#2196F3";
      default:
        return "#61dafb";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Portfolio</h1>
        <p>Check out some of our recent projects and work.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "30px 0",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "25px",
                borderRadius: "10px",
                textAlign: "left",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#61dafb" }}>
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  margin: "10px 0",
                }}
              >
                {project.description}
              </p>
              <div style={{ margin: "15px 0" }}>
                <strong>Technologies:</strong>
                <div style={{ marginTop: "5px" }}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        display: "inline-block",
                        backgroundColor: "rgba(97, 218, 251, 0.2)",
                        color: "#61dafb",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        marginRight: "5px",
                        marginTop: "5px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span style={{ fontSize: "14px" }}>Status:</span>
                <span
                  style={{
                    color: getStatusColor(project.status),
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Portfolio;
