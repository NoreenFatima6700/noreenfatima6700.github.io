// Project Data
const projects = [
  { title: "E-Commerce Dashboard", tech: ["React", "Node", "Mongo"], category: "web", link: "#" },
  { title: "Fitness Tracker App", tech: ["Flutter", "Firebase"], category: "mobile", link: "#" },
  { title: "AI Resume Parser", tech: ["Python", "FastAPI", "React"], category: "web", link: "#" }
];

// Render Projects
const container = document.getElementById('projects-container');
function renderProjects(filter = 'all') {
  container.innerHTML = '';
  projects.filter(p => filter === 'all' || p.category === filter).forEach(p => {
    container.innerHTML += `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.tech.join(' • ')}</p>
        <a href="${p.link}" class="btn primary" style="margin-top:1rem;display:inline-block">View Project</a>
      </div>`;
  });
}
renderProjects();

// Filter Buttons
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
  document.body.dataset.theme = theme;
  toggle.textContent = theme === 'light' ? '🌙' : '☀️';
});

// QR Code Generator (auto-updates with current URL)
new QRCode(document.getElementById("qr-code"), {
  text: window.location.href,
  width: 150,
  height: 150
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero-title, .hero-subtitle, .hero-cta", {
  y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
});
gsap.utils.toArray(".project-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: { trigger: card, start: "top 85%" },
    y: 40, opacity: 0, duration: 0.8, ease: "power2.out"
  });
});
