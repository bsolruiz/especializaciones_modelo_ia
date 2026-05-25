/* data.js — Metadatos de especialidades y configuraciones de ranking */

const META = {
  "Data Science": {
    avatarBg: "#DFF4FF", emoji: "📊",
    img: "/static/imges_recom/data.png",
    tags: [
      { label: "Datos",    bg: "rgba(80,180,255,.2)", color: "#0066aa" },
      { label: "Analítica", bg: "rgba(0,200,160,.2)",  color: "#006b57" }
    ],
    consejo: "Te destacas interpretando información y encontrando patrones. Data Science puede darte un perfil muy versátil y estratégico."
  },

  "Machine Learning": {
    avatarBg: "#ECE4FF", emoji: "🧠",
    img: "/static/imges_recom/machine.png",
    tags: [
      { label: "IA",           bg: "rgba(120,90,255,.2)", color: "#5c36d6" },
      { label: "Alta Demanda", bg: "rgba(0,180,120,.2)",  color: "#007a52" }
    ],
    consejo: "Tu perfil encaja con áreas de automatización inteligente y modelos predictivos. Machine Learning combina lógica, matemáticas e innovación."
  },

  "Inteligencia Artificial": {
    avatarBg: "#E4F1FF", emoji: "🤖",
    img: "/static/imges_recom/ia.png",
    tags: [
      { label: "Futuro Tech", bg: "rgba(70,150,255,.2)",  color: "#0050b8" },
      { label: "Innovación",  bg: "rgba(255,170,0,.2)",   color: "#9c6400" }
    ],
    consejo: "Tienes afinidad por tecnologías avanzadas y resolución de problemas complejos. IA es un campo con gran crecimiento y proyección."
  },

  "Big Data": {
    avatarBg: "#FFF3D8", emoji: "🗄️",
    img: "/static/imges_recom/big.png",
    tags: [
      { label: "Escalabilidad", bg: "rgba(255,170,0,.2)",  color: "#9a5c00" },
      { label: "Datos",         bg: "rgba(70,170,255,.2)", color: "#005d9b" }
    ],
    consejo: "Tu interés por sistemas robustos y manejo masivo de información hace que Big Data sea una excelente opción."
  },

  "Desarrollo Web": {
    avatarBg: "#EAFBFF", emoji: "🌐",
    img: "/static/imges_recom/web.png",
    tags: [
      { label: "Creatividad", bg: "rgba(0,180,255,.2)",  color: "#006e9e" },
      { label: "Alta Salida", bg: "rgba(0,200,100,.2)",  color: "#00703c" }
    ],
    consejo: "Combinas lógica y diseño visual de forma equilibrada. Desarrollo Web permite crear productos completos y visibles rápidamente."
  },

  "Backend": {
    avatarBg: "#EEF4FF", emoji: "🖥️",
    img: "/static/imges_recom/back.png",
    tags: [
      { label: "Lógica", bg: "rgba(80,120,255,.2)",  color: "#2748a5" },
      { label: "APIs",   bg: "rgba(0,180,255,.2)",   color: "#006e9e" }
    ],
    consejo: "Tu perfil apunta a construir sistemas sólidos y escalables. Backend es ideal si disfrutas la arquitectura y la lógica profunda."
  },

  "Frontend": {
    avatarBg: "#FFF1E8", emoji: "🎨",
    img: "/static/imges_recom/front.png",
    tags: [
      { label: "UI",          bg: "rgba(255,140,0,.2)",   color: "#9a4d00" },
      { label: "Experiencia", bg: "rgba(255,90,120,.2)",  color: "#a02845" }
    ],
    consejo: "Tienes afinidad por la experiencia visual y la interacción. Frontend mezcla diseño, creatividad y tecnología."
  },

  "Mobile": {
    avatarBg: "#EEFDF7", emoji: "📱",
    img: "/static/imges_recom/mobile.png",
    tags: [
      { label: "Apps",     bg: "rgba(0,210,150,.2)",  color: "#007257" },
      { label: "Versátil", bg: "rgba(70,150,255,.2)", color: "#005eb5" }
    ],
    consejo: "Tu interés por soluciones prácticas y modernas encaja muy bien con el desarrollo de aplicaciones móviles."
  },

  "DevOps": {
    avatarBg: "#F4F7FF", emoji: "♾️",
    img: "/static/imges_recom/devp.png",
    tags: [
      { label: "Automatización",  bg: "rgba(120,120,255,.2)", color: "#4f4fc7" },
      { label: "Infraestructura", bg: "rgba(0,180,120,.2)",   color: "#00734b" }
    ],
    consejo: "Te adaptas bien a entornos técnicos y organizados. DevOps conecta desarrollo, automatización y despliegue continuo."
  },

  "Cloud Computing": {
    avatarBg: "#EDF9FF", emoji: "☁️",
    img: "/static/imges_recom/cloud.png",
    tags: [
      { label: "Escalable",       bg: "rgba(0,170,255,.2)",  color: "#005d9e" },
      { label: "Infraestructura", bg: "rgba(0,200,120,.2)",  color: "#006b3f" }
    ],
    consejo: "Tu perfil encaja con tecnologías modernas y servicios distribuidos. Cloud Computing es clave en empresas actuales."
  },

  "Ciberseguridad": {
    avatarBg: "#EEFDF3", emoji: "🛡️",
    img: "/static/imges_recom/ciber.png",
    tags: [
      { label: "Seguridad",    bg: "rgba(0,170,120,.2)",  color: "#005d47" },
      { label: "Alta Demanda", bg: "rgba(255,120,0,.2)",  color: "#974d00" }
    ],
    consejo: "Tienes una mentalidad analítica y preventiva. Ciberseguridad protege sistemas críticos y tiene gran proyección laboral."
  },

  "Pentesting": {
    avatarBg: "#FFF4EA", emoji: "🔎",
    img: "/static/imges_recom/pen.png",
    tags: [
      { label: "Hacking Ético", bg: "rgba(255,120,0,.2)",   color: "#944d00" },
      { label: "Investigación",  bg: "rgba(120,80,255,.2)",  color: "#5c35cf" }
    ],
    consejo: "Disfrutas resolver problemas y detectar vulnerabilidades. Pentesting combina análisis técnico y pensamiento estratégico."
  },

  "Redes": {
    avatarBg: "#EEF8FF", emoji: "🔗",
    img: "/static/imges_recom/net.png",
    tags: [
      { label: "Conectividad",    bg: "rgba(70,170,255,.2)", color: "#005c96" },
      { label: "Infraestructura", bg: "rgba(0,180,120,.2)",  color: "#006e47" }
    ],
    consejo: "Tu perfil se adapta a estructuras técnicas y conectividad. Redes es fundamental para cualquier ecosistema tecnológico."
  },

  "Arquitectura Software": {
    avatarBg: "#EEF3FF", emoji: "🏗️",
    img: "/static/imges_recom/arquitectura.png",
    tags: [
      { label: "Arquitectura", bg: "rgba(90,120,255,.2)",  color: "#3148a8" },
      { label: "Senior",       bg: "rgba(255,170,0,.2)",   color: "#9b6500" }
    ],
    consejo: "Tienes capacidad para visualizar sistemas completos y estructurados. Arquitectura de Software requiere visión estratégica."
  },

  "Microservicios": {
    avatarBg: "#F4EEFF", emoji: "🧩",
    img: "/static/imges_recom/micros.png",
    tags: [
      { label: "Escalable", bg: "rgba(150,90,255,.2)",  color: "#6637d1" },
      { label: "Backend",   bg: "rgba(0,160,255,.2)",   color: "#005f99" }
    ],
    consejo: "Tu perfil encaja con sistemas modernos y distribuidos. Microservicios permite construir plataformas altamente escalables."
  },

  "QA Testing": {
    avatarBg: "#EEFDF7", emoji: "🧪",
    img: "/static/imges_recom/testing.png",
    tags: [
      { label: "Calidad", bg: "rgba(0,200,140,.2)",  color: "#00684b" },
      { label: "Detalle", bg: "rgba(80,160,255,.2)", color: "#005fa0" }
    ],
    consejo: "Eres detallista y analítico. QA Testing es ideal para garantizar calidad y detectar errores antes de producción."
  },

  "Automatización QA": {
    avatarBg: "#EEF7FF", emoji: "⚙️",
    img: "/static/imges_recom/automatizacion.png",
    tags: [
      { label: "Automatización", bg: "rgba(70,140,255,.2)",  color: "#0052a3" },
      { label: "Testing",        bg: "rgba(0,190,140,.2)",   color: "#006a4d" }
    ],
    consejo: "Combinas lógica y optimización. Automatización QA permite crear procesos eficientes para validar software."
  },

  "Gestión TI": {
    avatarBg: "#FFF3EA", emoji: "💼",
    img: "/static/imges_recom/mana.png",
    tags: [
      { label: "Gestión",   bg: "rgba(255,140,0,.2)",  color: "#944e00" },
      { label: "Liderazgo", bg: "rgba(255,80,80,.2)",  color: "#9b2c2c" }
    ],
    consejo: "Tu perfil muestra habilidades organizativas y estratégicas. Gestión TI conecta negocio, tecnología y liderazgo."
  },

  "Product Owner": {
    avatarBg: "#FFF7EA", emoji: "🏁",
    img: "/static/imges_recom/product.png",
    tags: [
      { label: "Producto",  bg: "rgba(255,180,0,.2)",  color: "#9c6800" },
      { label: "Agilidad",  bg: "rgba(80,170,255,.2)", color: "#005f9e" }
    ],
    consejo: "Tienes capacidad para entender usuarios y priorizar objetivos. Product Owner mezcla estrategia y gestión ágil."
  },

  "Blockchain": {
    avatarBg: "#F3EEFF", emoji: "⛓️",
    img: "/static/imges_recom/block.png",
    tags: [
      { label: "Innovación",       bg: "rgba(120,80,255,.2)",  color: "#5f37d0" },
      { label: "Descentralización", bg: "rgba(0,180,255,.2)",  color: "#006a96" }
    ],
    consejo: "Te atraen las tecnologías disruptivas y sistemas seguros. Blockchain tiene gran potencial en múltiples industrias."
  },

  "IoT": {
    avatarBg: "#FFFBEA", emoji: "💡",
    img: "/static/imges_recom/iot.png",
    tags: [
      { label: "Dispositivos", bg: "rgba(255,200,0,.2)",  color: "#946800" },
      { label: "Innovación",   bg: "rgba(0,180,255,.2)",  color: "#005e94" }
    ],
    consejo: "Tu interés por hardware y conectividad encaja con IoT. Es un área enfocada en automatización y dispositivos inteligentes."
  },

  "Realidad Virtual": {
    avatarBg: "#F3F0FF", emoji: "🥽",
    img: "/static/imges_recom/realidad.png",
    tags: [
      { label: "Experiencias", bg: "rgba(140,90,255,.2)",  color: "#5d37c7" },
      { label: "Creatividad",  bg: "rgba(255,120,180,.2)", color: "#9e2f61" }
    ],
    consejo: "Tienes afinidad por experiencias inmersivas y creatividad digital. Realidad Virtual combina innovación y diseño."
  },

  "UX/UI": {
    avatarBg: "#EEFDF8", emoji: "🖌️",
    img: "/static/imges_recom/ui.png",
    tags: [
      { label: "Diseño",      bg: "rgba(0,190,150,.2)",  color: "#006d58" },
      { label: "Experiencia", bg: "rgba(80,170,255,.2)", color: "#005d9c" }
    ],
    consejo: "Tu perfil destaca en creatividad y empatía con usuarios. UX/UI se enfoca en crear experiencias intuitivas y atractivas."
  },

  "Soporte Técnico": {
    avatarBg: "#EEF8FF", emoji: "🛠️",
    img: "/static/imges_recom/soporte.png",
    tags: [
      { label: "Resolución", bg: "rgba(70,150,255,.2)", color: "#0059a0" },
      { label: "Soporte",    bg: "rgba(0,180,120,.2)",  color: "#006d47" }
    ],
    consejo: "Tienes habilidades para resolver problemas prácticos y asistir usuarios. Soporte Técnico es una base sólida en tecnología."
  },

  "Gamer Developer": {
    avatarBg: "#F3EEFF", emoji: "🎮",
    img: "/static/imges_recom/gamer.png",
    tags: [
      { label: "Creatividad",    bg: "rgba(140,90,255,.2)",  color: "#5d37c7" },
      { label: "Entretenimiento", bg: "rgba(255,120,180,.2)", color: "#9e2f61" }
    ],
    consejo: "Tu perfil combina creatividad, lógica y diseño interactivo. Desarrollo de videojuegos puede permitirte construir experiencias inmersivas y dinámicas."
  },

  "Analista de Datos": {
    avatarBg: "#EEF8FF", emoji: "📈",
    img: "/static/imges_recom/analista.png",
    tags: [
      { label: "Datos",    bg: "rgba(70,170,255,.2)", color: "#005c96" },
      { label: "Análisis", bg: "rgba(0,180,120,.2)",  color: "#006d47" }
    ],
    consejo: "Tu perfil encaja con interpretación de información y toma de decisiones basadas en datos. Es una ruta accesible y con alta empleabilidad."
  },

  "Scrum Master": {
    avatarBg: "#FFF6EA", emoji: "📋",
    img: "/static/imges_recom/scrum.png",
    tags: [
      { label: "Gestión Ágil", bg: "rgba(255,170,0,.2)",   color: "#946400" },
      { label: "Liderazgo",    bg: "rgba(255,120,80,.2)",  color: "#9b3f20" }
    ],
    consejo: "Tienes habilidades organizativas y de comunicación. Scrum Master conecta equipos, procesos ágiles y liderazgo tecnológico."
  }
};

const DEFAULT_META = {
  avatarBg: "#E3EBDC", emoji: "💻",
  tags: [{ label: "Tecnología", bg: "rgba(194,201,181,0.3)", color: "#424939" }],
  consejo: "Esta especialidad ofrece un camino único en el bosque del software. Explora sus ramas y descubre todo lo que tiene para ofrecerte."
};

const RANK_CONFIGS = [
  { bg: "#7CB342", borderB: "#3C6A00", numColor: "#234100", cardBorder: "#3C6A00", barColor: "#3C6A00", scoreColor: "#3C6A00" },
  { bg: "#DEE5D6", borderB: "#737A68", numColor: "#424939", cardBorder: "#E9F0E1", barColor: "#9F4122", scoreColor: "#9F4122" },
  { bg: "#DEE5D6", borderB: "#737A68", numColor: "#424939", cardBorder: "#E9F0E1", barColor: "#424939", scoreColor: "#424939" },
];
