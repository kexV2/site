const data = window.portfolioData || portfolioData;

const labelMap = {
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "Email",
  cv: "Download CV"
};

const visualMap = {
  attribution: "Identity evidence comparison",
  honeynet: "Distributed sensor telemetry",
  soc: "Alert and log correlation",
  veriscan: "Explainable image analysis",
  threat: "Threat model and controls",
  aws: "Recovery architecture"
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function linkFrom(type, value, className = "button") {
  if (!value) return null;
  const anchor = el("a", className, labelMap[type] || type);
  anchor.href = type === "email" && !value.startsWith("mailto:") ? `mailto:${value}` : value;
  if (/^https?:\/\//.test(value)) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  return anchor;
}

function renderLinks() {
  const actions = document.querySelector("#hero-actions");
  const contactLinks = document.querySelector("#contact-links");
  const linkEntries = Object.entries(data.profile.links).filter(([, value]) => Boolean(value));

  linkEntries.forEach(([type, value]) => {
    const heroLink = linkFrom(type, value, "button");
    const contactLink = linkFrom(type, value, "button");
    if (heroLink && ["github", "linkedin", "cv"].includes(type)) actions.append(heroLink);
    if (contactLink) contactLinks.append(contactLink);
  });

}

function renderProfileCard() {
  const profileCard = data.profile.profileCard || {};
  const banner = document.querySelector("#profile-banner");
  const avatar = document.querySelector("#profile-avatar");
  const handle = document.querySelector("#profile-handle");
  const status = document.querySelector("#profile-status");
  const badges = document.querySelector("#profile-badges");
  const stats = document.querySelector("#profile-stats");

  document.querySelector("#hero-title").textContent = profileCard.displayName || data.profile.name;
  handle.textContent = `@${profileCard.handle || data.profile.name.toLowerCase().replace(/\s+/g, "")}`;
  status.textContent = profileCard.status || data.profile.location;

  if (profileCard.bannerImage) {
    banner.style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.04), rgba(16, 16, 16, 0.28)), url("${profileCard.bannerImage}")`;
  } else if (profileCard.bannerGradient) {
    banner.style.background = profileCard.bannerGradient;
  }

  if (avatar.tagName === "IMG") {
    avatar.src = profileCard.avatarImage || avatar.getAttribute("src") || "";
    avatar.alt = `Photo of ${profileCard.displayName || data.profile.name}`;
  } else if (profileCard.avatarImage) {
    avatar.textContent = "";
    avatar.style.backgroundImage = `url("${profileCard.avatarImage}")`;
    avatar.classList.add("has-image");
  } else {
    avatar.textContent = profileCard.avatarInitials || "DK";
  }

  badges.replaceChildren(...(profileCard.badges || []).map((badge) => el("span", "profile-badge", badge)));
  stats.replaceChildren(
    ...(profileCard.stats || []).map((item) => {
      const stat = el("div", "profile-stat");
      stat.append(el("strong", "", item.value), el("span", "", item.label));
      return stat;
    })
  );
}

function allGraphTargets() {
  return [
    ...data.projects.map((item) => ({ ...item, type: "Featured Project" })),
    ...data.academicWork.map((item) => ({ ...item, type: "Academic Work" })),
    ...data.otherWork.map((item) => ({ ...item, type: "Other Development" }))
  ];
}

function renderProjectGraph() {
  const graph = document.querySelector("#project-graph");
  if (!graph || !data.profile.projectGraph) return;

  const targets = allGraphTargets();
  const targetByTitle = new Map(targets.map((item) => [item.title, item]));
  const groups = data.profile.projectGraph.groups;
  const graphLayout = {
    categories: {
      "Digital Forensics & OSINT": { x: 53, y: 14, side: "left" },
      "Cloud Defence": { x: 82, y: 32, side: "left" },
      "SOC & Network Monitoring": { x: 72, y: 76, side: "left" },
      "Application Security": { x: 27, y: 76, side: "right" },
      "Security Challenges": { x: 18, y: 32, side: "right" },
      "Other Development": { x: 50, y: 47, side: "right" }
    },
    projects: {
      "KEXIS Attribution Framework": { x: 34, y: 25, side: "right" },
      "VeriScan": { x: 52, y: 36, side: "right" },
      "Digital Forensics Investigations": { x: 14, y: 14, side: "right" },
      "Biometric Security Testing": { x: 56, y: 8, side: "right" },
      "Distributed T-Pot Honeynet": { x: 64, y: 63, side: "left" },
      "AWS Disaster Recovery and Business Continuity": { x: 67, y: 22, side: "right" },
      "Open-Source Security Operations Centre": { x: 84, y: 88, side: "left" },
      "Cisco Multi-Site Network Security": { x: 88, y: 54, side: "left" },
      "Application Security and Threat Modelling": { x: 31, y: 88, side: "right" },
      "ZeroDays 2025": { x: 13, y: 50, side: "right" },
      "ZeroDays 2026": { x: 10, y: 18, side: "right" },
      "CryptoHack": { x: 36, y: 30, side: "right" },
      "Highway of Havoc": { x: 26, y: 60, side: "right" }
    }
  };
  const projectPositions = new Map();
  const links = [];

  groups.forEach((group) => {
    const category = graphLayout.categories[group.name];
    if (!category) return;
    group.items.forEach((title) => {
      if (!targetByTitle.has(title)) return;
      const project = graphLayout.projects[title];
      if (!project) return;
      projectPositions.set(title, project);
      links.push({ group: group.name, title });
    });
  });

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "graph-lines");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");

  links.forEach((link) => {
    const category = graphLayout.categories[link.group];
    const project = projectPositions.get(link.title);
    if (!category || !project) return;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", category.x);
    line.setAttribute("y1", category.y);
    line.setAttribute("x2", project.x);
    line.setAttribute("y2", project.y);
    line.dataset.group = link.group;
    line.dataset.title = link.title;
    svg.append(line);
  });

  const nodes = [];
  groups.forEach((group) => {
    const position = graphLayout.categories[group.name];
    if (!position) return;
    nodes.push({ kind: "category", title: group.name, ...position });
  });
  projectPositions.forEach((position, title) => {
    const target = targetByTitle.get(title);
    nodes.push({ kind: "project", title, type: target.type, ...position });
  });

  const fragment = document.createDocumentFragment();
  fragment.append(svg);
  nodes.forEach((node) => {
    const labelSide = node.side === "left" || node.x > 72 ? "label-left" : "label-right";
    const button = el("button", `graph-node ${node.kind === "category" ? "category-node" : "project-node"} ${labelSide}`);
    button.type = "button";
    button.style.left = `${node.x}%`;
    button.style.top = `${node.y}%`;
    button.dataset.title = node.title;
    button.append(el("span", "node-dot"), el("span", "node-label", node.title));
    if (node.kind === "project") {
      button.setAttribute("aria-label", `${node.title}, ${node.type}`);
    } else {
      button.setAttribute("aria-label", `${node.title} category`);
    }
    button.addEventListener("click", () => {
      const target = document.querySelector(`[data-graph-title="${CSS.escape(node.title)}"]`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
      graph.querySelectorAll(".is-active").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      graph.querySelectorAll(`[data-title="${CSS.escape(node.title)}"]`).forEach((item) => item.classList.add("is-active"));
      graph.querySelectorAll(`[data-group="${CSS.escape(node.title)}"]`).forEach((item) => item.classList.add("is-active"));
    });
    fragment.append(button);
  });

  graph.replaceChildren(fragment);
}

function renderProject(project) {
  const card = el("article", "project-card");
  card.id = `project-${slugify(project.title)}`;
  card.dataset.graphTitle = project.title;
  const visual = el("div", `project-visual visual-${project.visual || "default"}`);
  visual.setAttribute("aria-hidden", "true");
  visual.append(el("span", "visual-label", visualMap[project.visual] || "Project architecture"));

  const body = el("div", "project-body");
  body.append(el("p", "category", project.category));
  body.append(el("h3", "", project.title));
  body.append(el("p", "", project.summary));

  const details = el("details");
  const summary = el("summary", "", "Project detail");
  const detailList = el("div", "detail-list");
  [
    ["Problem or goal", project.problem],
    ["Dylan's contribution", project.contribution],
    ["Testing and review", project.testing],
    ["Outcome or learning", project.outcome],
    ["Note", project.note]
  ].forEach(([label, text]) => {
    if (!text) return;
    const p = el("p");
    p.innerHTML = `<strong>${label}:</strong> ${text}`;
    detailList.append(p);
  });
  details.append(summary, detailList);

  const tags = el("div", "tag-list");
  project.technologies.forEach((tech) => tags.append(el("span", "tag", tech)));
  body.append(details, tags);
  card.append(visual, body);
  return card;
}

function renderCompact(item) {
  const card = el("article", "compact-card");
  card.id = `work-${slugify(item.title)}`;
  card.dataset.graphTitle = item.title;
  card.append(el("h3", "", item.title));
  card.append(el("p", "", item.summary));
  if (item.work) {
    const list = el("ul");
    item.work.forEach((entry) => list.append(el("li", "", entry)));
    card.append(list);
  }
  const tags = el("div", "tag-list");
  item.technologies.forEach((tech) => tags.append(el("span", "tag", tech)));
  card.append(tags);
  return card;
}

function renderSkills(group) {
  const card = el("article", "skill-card");
  card.append(el("h3", "", group.group));
  const tags = el("div", "tag-list");
  group.items.forEach((item) => tags.append(el("span", "tag", item)));
  card.append(tags);
  return card;
}

function renderEducation(item) {
  const card = el("article", "education-item");
  card.append(el("p", "education-meta", item.dates));
  card.append(el("h3", "", item.institution));
  card.append(el("p", "", item.award));
  if (item.result) card.append(el("p", "", item.result));
  const list = el("ul");
  item.areas.forEach((area) => list.append(el("li", "", area)));
  card.append(list);
  return card;
}

function boot() {
  renderProfileCard();
  document.querySelector("#profile-summary").textContent = data.profile.summary;
  document.querySelector("#about-copy").replaceChildren(...data.profile.about.map((text) => el("p", "", text)));
  document.querySelector("#project-grid").replaceChildren(...data.projects.map(renderProject));
  document.querySelector("#academic-grid").replaceChildren(...data.academicWork.map(renderCompact));
  document.querySelector("#other-grid").replaceChildren(...data.otherWork.map(renderCompact));
  renderProjectGraph();
  document.querySelector("#skills-grid").replaceChildren(...data.skills.map(renderSkills));
  document.querySelector("#education-list").replaceChildren(...data.education.map(renderEducation));
  document.querySelector("#achievement-list").replaceChildren(...data.achievements.map((entry) => el("div", "achievement", entry)));
  document.querySelector("#year").textContent = new Date().getFullYear();
  renderLinks();

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("#nav-menu");
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });
  navMenu.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
}

boot();
