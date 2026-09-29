const data = window.portfolioData;

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderProfile() {
  const profile = data.profile;
  const card = profile.profileCard;
  const banner = document.querySelector("#profile-banner");
  const avatar = document.querySelector("#profile-avatar");

  if (card.bannerImage) banner.style.backgroundImage = `url("${card.bannerImage}")`;
  if (card.avatarImage) avatar.src = card.avatarImage;
  document.querySelector("#profile-handle").textContent = `@${card.handle}`;
  document.querySelector("#profile-name").textContent = card.displayName;
  document.querySelector("#profile-role").textContent = profile.role;
  document.querySelector("#profile-status").textContent = card.status;
  document.querySelector("#profile-location").textContent = profile.location;
  document.querySelector("#profile-summary").textContent = profile.summary;
  document.querySelector("#profile-tags").innerHTML = card.badges
    .map((badge) => `<span>${escapeHtml(badge)}</span>`)
    .join("");

  const linkedIn = document.querySelector("#linkedin-link");
  linkedIn.href = profile.links.linkedin;
}

function setupPresence() {
  const status = document.querySelector("#presence-status");
  const label = document.querySelector("#presence-label");
  const dublinClock = new Intl.DateTimeFormat("en-IE", {
    timeZone: "Europe/Dublin",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });

  function updatePresence() {
    const parts = Object.fromEntries(
      dublinClock.formatToParts(new Date()).map(({ type, value }) => [type, value])
    );
    const minutes = Number(parts.hour) * 60 + Number(parts.minute);
    const online = minutes >= 9 * 60 && minutes < 17 * 60;
    const state = online ? "Online" : "Away";

    label.textContent = state;
    status.classList.toggle("is-online", online);
    status.classList.toggle("is-away", !online);
    status.setAttribute("aria-label", `${state}, scheduled for 09:00 to 17:00 Ireland time`);
    status.title = `${state} · Ireland time · 09:00-17:00`;

    const now = new Date();
    const untilNextMinute = (60 - now.getUTCSeconds()) * 1000 - now.getUTCMilliseconds();
    window.setTimeout(updatePresence, untilNextMinute);
  }

  updatePresence();
}

function renderClientProject() {
  const project = data.clientProject;
  document.querySelector("#client-meta").textContent = `${project.client} · ${project.dates}`;
  document.querySelector("#client-title").textContent = project.title;
  document.querySelector("#client-summary").textContent = project.summary;
  document.querySelector("#client-facts").innerHTML = project.facts
    .map(({ value, label }) => `<div class="client-fact"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`)
    .join("");
  document.querySelector("#client-details").innerHTML = [
    ["Context", project.problem],
    ["My contribution", project.contribution],
    ["Delivery", project.outcome],
    ["Iteration", project.testing]
  ].map(([label, text]) => `<p><strong>${label}.</strong> ${escapeHtml(text)}</p>`).join("");
  document.querySelector("#client-technologies").innerHTML = project.technologies
    .map((technology) => `<li>${escapeHtml(technology)}</li>`)
    .join("");
}

function renderProject(project, index) {
  return `
    <article class="project-item" data-kind="${escapeHtml(project.type)}">
      <details ${index === 0 ? "open" : ""}>
        <summary>
          <span class="project-category">${escapeHtml(project.category)}</span>
          <h4>${escapeHtml(project.title)}</h4>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
        </summary>
        <div class="project-expanded">
          <p><strong>Problem.</strong> ${escapeHtml(project.problem)}</p>
          <p><strong>Contribution.</strong> ${escapeHtml(project.contribution)}</p>
          <p><strong>Outcome.</strong> ${escapeHtml(project.outcome)}</p>
          <p><strong>Review.</strong> ${escapeHtml(project.testing)}</p>
          ${project.note ? `<p>${escapeHtml(project.note)}</p>` : ""}
          <p class="project-tags">${project.technologies.map(escapeHtml).join(" · ")}</p>
        </div>
      </details>
    </article>`;
}

function renderAdditional(item) {
  const work = item.work
    ? `<p>${item.work.map(escapeHtml).join(" · ")}</p>`
    : "";
  return `
    <details class="additional-item">
      <summary>${escapeHtml(item.title)}</summary>
      <p>${escapeHtml(item.summary)}</p>
      ${work}
      <p class="project-tags">${item.technologies.map(escapeHtml).join(" · ")}</p>
    </details>`;
}

function renderExperience() {
  const role = data.experience;
  document.querySelector("#experience-entry").innerHTML = `
    <div class="experience-heading">
      <h3>${escapeHtml(role.title)}</h3>
      <span class="experience-date">${escapeHtml(role.dates)}</span>
    </div>
    <p class="experience-company">${escapeHtml(role.company)}</p>
    <ul>${role.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>`;
}

function renderEducation(item) {
  return `
    <article class="education-item">
      <h3>${escapeHtml(item.institution)}</h3>
      <p class="education-award">${escapeHtml(item.award)}</p>
      <span class="education-date">${escapeHtml(item.dates)}</span>
      ${item.result ? `<p class="education-result">${escapeHtml(item.result)}</p>` : ""}
      <p class="education-areas">${item.areas.map(escapeHtml).join(" · ")}</p>
    </article>`;
}

function renderSkills(group) {
  return `
    <section class="skill-group">
      <h4>${escapeHtml(group.group)}</h4>
      <p>${group.items.map(escapeHtml).join(" · ")}</p>
    </section>`;
}

function renderContact() {
  const { links } = data.profile;
  const items = [
    links.email && [`Email Dylan`, `mailto:${links.email}`],
    links.linkedin && ["LinkedIn", links.linkedin]
  ].filter(Boolean);

  document.querySelector("#contact-links").innerHTML = items
    .map(([label, href]) => `<a href="${escapeHtml(href)}" ${href.startsWith("https:") ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(label)}</a>`)
    .join("");
}

function setupFilters() {
  const filters = document.querySelector("#work-filters");
  const projects = [...document.querySelectorAll(".project-item")];

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    const filter = button.dataset.filter;
    filters.querySelectorAll("button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    projects.forEach((project) => {
      project.hidden = filter !== "all" && project.dataset.kind !== filter;
    });
  });
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function render() {
  renderProfile();
  setupPresence();
  renderClientProject();
  renderExperience();
  document.querySelector("#project-list").innerHTML = data.projects.map(renderProject).join("");
  document.querySelector("#additional-list").innerHTML = [...data.academicWork, ...data.otherWork].map(renderAdditional).join("");
  document.querySelector("#about-copy").innerHTML = data.profile.about
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  document.querySelector("#education-list").innerHTML = data.education.map(renderEducation).join("");
  document.querySelector("#skills-list").innerHTML = data.skills.map(renderSkills).join("");
  document.querySelector("#achievement-list").innerHTML = data.achievements
    .map((achievement) => `<li>${escapeHtml(achievement)}</li>`)
    .join("");
  document.querySelector("#year").textContent = new Date().getFullYear();
  renderContact();
  setupFilters();
  setupNavigation();
}

render();
