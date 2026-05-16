// SciVoces — Lógica principal del sitio
// Base de datos de entrevistas (editable: añade nuevas entradas aquí)
window.INTERVIEWS = [
  {
    slug: "matematicas-topologia-redes-neuronales",
    title: "Topología aplicada a redes neuronales profundas",
    category: "Matemáticas",
    cat: "matematicas",
    glyph: "∑",
    author: "Dra. Helena Restrepo",
    affiliation: "Universidad de Cambridge",
    date: "2025-04-22",
    summary: "Cómo las herramientas topológicas permiten analizar la estructura interna de redes neuronales y mejorar su capacidad de generalización."
  },
  {
    slug: "fisica-materia-oscura-detectores-criogenicos",
    title: "La búsqueda de materia oscura con detectores criogénicos",
    category: "Física",
    cat: "fisica",
    glyph: "Ψ",
    author: "Dr. Marco Lévy",
    affiliation: "CERN",
    date: "2025-04-15",
    summary: "Los últimos avances experimentales en la detección directa de partículas WIMP y sus implicaciones cosmológicas."
  },
  {
    slug: "quimica-catalizadores-verdes-amonio",
    title: "Catalizadores verdes para la síntesis sostenible de amoníaco",
    category: "Química",
    cat: "quimica",
    glyph: "⚗",
    author: "Dra. Yuki Tanaka",
    affiliation: "Universidad de Tokio",
    date: "2025-04-05",
    summary: "Una alternativa al proceso Haber–Bosch usando catálisis electroquímica a temperatura ambiente."
  },
  {
    slug: "biologia-edicion-genetica-arrecifes",
    title: "Edición genética para salvar los arrecifes de coral",
    category: "Biología",
    cat: "biologia",
    glyph: "🧬",
    author: "Dr. Samuel Okafor",
    affiliation: "Australian Institute of Marine Science",
    date: "2025-03-28",
    summary: "Cómo CRISPR podría ayudar a corales a resistir el blanqueamiento causado por el aumento de temperatura oceánica."
  },
  {
    slug: "tecnologia-chips-fotonicos-ia",
    title: "Chips fotónicos: la próxima frontera del cómputo en IA",
    category: "Tecnología",
    cat: "tecnologia",
    glyph: "⚡",
    author: "Dra. Priya Raman",
    affiliation: "MIT",
    date: "2025-03-20",
    summary: "Arquitecturas de cómputo basadas en luz que prometen reducir el consumo energético de los grandes modelos de IA."
  },
  {
    slug: "matematicas-teoria-numeros-criptografia-postcuantica",
    title: "Teoría de números y criptografía post-cuántica",
    category: "Matemáticas",
    cat: "matematicas",
    glyph: "π",
    author: "Dr. Andrei Volkov",
    affiliation: "ETH Zürich",
    date: "2025-03-10",
    summary: "Nuevos esquemas basados en retículos que resisten ataques de computadoras cuánticas."
  },
  {
    slug: "fisica-superconductores-temperatura-ambiente",
    title: "Superconductores a temperatura ambiente: realidad o espejismo",
    category: "Física",
    cat: "fisica",
    glyph: "❄",
    author: "Dra. Laila Hassan",
    affiliation: "Max Planck Institute",
    date: "2025-03-01",
    summary: "Una revisión crítica de los resultados recientes y los retos para la reproducibilidad experimental."
  },
  {
    slug: "quimica-baterias-estado-solido",
    title: "Baterías de estado sólido: hacia vehículos eléctricos seguros",
    category: "Química",
    cat: "quimica",
    glyph: "🔋",
    author: "Dr. Pablo Mendieta",
    affiliation: "Universidad de Stanford",
    date: "2025-02-22",
    summary: "Los electrolitos cerámicos y poliméricos que podrían reemplazar al ion-litio convencional."
  },
  {
    slug: "biologia-microbioma-intestinal-salud-mental",
    title: "Microbioma intestinal y salud mental: el eje intestino–cerebro",
    category: "Biología",
    cat: "biologia",
    glyph: "🦠",
    author: "Dra. Camille Dubois",
    affiliation: "Instituto Pasteur",
    date: "2025-02-14",
    summary: "Cómo las bacterias intestinales influyen en la ansiedad, la depresión y el desarrollo neurológico."
  },
  {
    slug: "tecnologia-computacion-cuantica-correccion-errores",
    title: "Computación cuántica: el reto de la corrección de errores",
    category: "Tecnología",
    cat: "tecnologia",
    glyph: "Q",
    author: "Dr. Liam O'Connor",
    affiliation: "Google Quantum AI",
    date: "2025-02-05",
    summary: "Los códigos de superficie y el camino hacia los qubits lógicos tolerantes a fallos."
  },
  {
    slug: "matematicas-modelos-epidemiologicos-redes",
    title: "Modelos epidemiológicos basados en redes complejas",
    category: "Matemáticas",
    cat: "matematicas",
    glyph: "∞",
    author: "Dra. Beatriz Salgado",
    affiliation: "Universidad de São Paulo",
    date: "2025-01-28",
    summary: "Cómo la topología de las redes sociales reales mejora la predicción de brotes infecciosos."
  },
  {
    slug: "biologia-envejecimiento-celular-senolíticos",
    title: "Senolíticos: medicamentos que eliminan células envejecidas",
    category: "Biología",
    cat: "biologia",
    glyph: "🧪",
    author: "Dr. Frederik Larsen",
    affiliation: "Mayo Clinic",
    date: "2025-01-15",
    summary: "Una nueva clase terapéutica que promete extender la vida saludable atacando la senescencia celular."
  }
];

// Utilidades
function formatDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES',{year:'numeric',month:'long',day:'numeric'});
}

function cardHTML(it){
  return `
    <article class="card cat-${it.cat}">
      <a href="/entrevistas/${it.slug}.html" class="card-media" aria-label="${it.title}">
        <span class="tag">${it.category}</span>
        <span class="glyph">${it.glyph}</span>
      </a>
      <div class="card-body">
        <div class="card-meta"><span>${formatDate(it.date)}</span><span>·</span><span>${it.author}</span></div>
        <h3><a href="/entrevistas/${it.slug}.html">${it.title}</a></h3>
        <p>${it.summary}</p>
        <a class="card-link" href="/entrevistas/${it.slug}.html">Leer entrevista completa →</a>
      </div>
    </article>`;
}

function renderLatest(targetId, limit=10){
  const el = document.getElementById(targetId);
  if(!el) return;
  const items = [...window.INTERVIEWS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,limit);
  el.innerHTML = items.map(cardHTML).join('') || '<div class="empty">Aún no hay entrevistas publicadas.</div>';
}

function renderCategory(targetId, cat){
  const el = document.getElementById(targetId);
  if(!el) return;
  const items = window.INTERVIEWS.filter(i=>i.cat===cat).sort((a,b)=>b.date.localeCompare(a.date));
  el.innerHTML = items.map(cardHTML).join('') || '<div class="empty">Aún no hay entrevistas en esta categoría.</div>';
}

// Menú móvil
document.addEventListener('DOMContentLoaded',()=>{
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click',()=>{
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
  }
  // Marcar enlace activo
  const path = location.pathname.replace(/\/index\.html$/,'/');
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (href !== '/' && path.startsWith(href))) a.classList.add('active');
  });
});
