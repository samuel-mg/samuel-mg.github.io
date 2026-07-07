async function loadSoftwareItems() {
  const response = await fetch("data/software.json");
  const items = await response.json();

  const container = document.getElementById("software-list");

  for (const item of items) {
    const textResponse = await fetch(item.textFile);
    const text = await textResponse.text();

    const section = document.createElement("section");
    section.className = `software-card ${item.layout} reveal`;

    const textParagraphs = text
      .trim()
      .split(/\n\s*\n/)
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");

    const linksHtml = item.links
      .map(link => `<a class="project-button" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
      .join("");

    section.innerHTML = `
      <div class="software-text">
        <h2>${item.title}</h2>
        ${textParagraphs}
        <div class="project-links">
          ${linksHtml}
        </div>
      </div>

      <div class="software-image">
        <img src="${item.image}" alt="${item.imageAlt}">
      </div>
    `;

    section.querySelectorAll("a").forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    container.appendChild(section);
  }

  if (typeof initRevealAnimations === "function") {
    initRevealAnimations();
  }
}

loadSoftwareItems();