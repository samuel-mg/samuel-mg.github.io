async function loadOutreachItems() {
  const response = await fetch("data/outreach.json");
  const items = await response.json();

  const container = document.getElementById("outreach-list");

  for (const item of items) {
    const textResponse = await fetch(item.textFile);
    const text = await textResponse.text();

    const section = document.createElement("section");
    section.className = `visual-card ${item.layout}`;

    const textParagraphs = text
      .trim()
      .split(/\n\s*\n/)
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");

    section.innerHTML = `
      <div class="visual-text">
        <h2>${item.title}</h2>

        ${textParagraphs}

        <a class="project-button" href="${item.buttonUrl}" target="_blank" rel="noopener noreferrer">
          ${item.buttonLabel}
        </a>
      </div>

      <div class="visual-window">
        <div class="visual-window-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <iframe
          src="${item.embedUrl}"
          title="${item.title}"
          loading="lazy">
        </iframe>
      </div>
    `;

    container.appendChild(section);
  }
}

loadOutreachItems();