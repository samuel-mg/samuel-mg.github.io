async function loadProjects() {
  const response = await fetch("data/projects.json");
  const projects = await response.json();

  const container = document.getElementById("projects-list");

  for (const project of projects) {
    const textResponse = await fetch(project.textFile);
    const text = await textResponse.text();

    const section = document.createElement("section");
    section.className = `project-card ${project.layout} reveal`;

    const textParagraphs = text
      .trim()
      .split(/\n\s*\n/)
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");

    const linksHtml = project.links
      .map(link => `<a class="project-button" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
      .join("");

    section.innerHTML = `
      <div class="project-text">
        <h2>${project.title}</h2>
        ${textParagraphs}
        <div class="project-links">
          ${linksHtml}
        </div>
      </div>

      <div class="project-image">
        <img src="${project.image}" alt="${project.imageAlt}">
      </div>
    `;

        container.appendChild(section);
  }

  if (typeof initRevealAnimations === "function") {
    initRevealAnimations();
  }
}

loadProjects();