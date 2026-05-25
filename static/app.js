/* app.js — Lógica del Recomendador de Especialidades */

function mostrarEstado(estado) {
  ["vacio", "cargando", "resultados", "api-error"].forEach(s => {
    const el = document.getElementById(`estado-${s}`);
    if (!el) return;
    if (s === estado) {
      el.classList.remove("hidden");
      if (["cargando", "api-error"].includes(s)) el.classList.add("flex");
    } else {
      el.classList.add("hidden");
      el.classList.remove("flex");
    }
  });
}

function selectModality(type) {
  const lblVirtual    = document.getElementById("lbl-virtual");
  const lblPresencial = document.getElementById("lbl-presencial");
  const radioVirtual    = document.getElementById("radio-virtual");
  const radioPresencial = document.getElementById("radio-presencial");

  if (type === "virtual") {
    radioVirtual.checked = true;
    lblVirtual.classList.replace("border-outline-variant", "border-primary");
    lblVirtual.classList.add("bg-primary-container/20", "text-on-surface");
    lblVirtual.classList.remove("text-on-surface-variant");

    lblPresencial.classList.replace("border-primary", "border-outline-variant");
    lblPresencial.classList.remove("bg-primary-container/20", "text-on-surface");
    lblPresencial.classList.add("text-on-surface-variant");
  } else {
    radioPresencial.checked = true;
    lblPresencial.classList.replace("border-outline-variant", "border-primary");
    lblPresencial.classList.add("bg-primary-container/20", "text-on-surface");
    lblPresencial.classList.remove("text-on-surface-variant");

    lblVirtual.classList.replace("border-primary", "border-outline-variant");
    lblVirtual.classList.remove("bg-primary-container/20", "text-on-surface");
    lblVirtual.classList.add("text-on-surface-variant");
  }
}

// Toggle modalidad (listener alternativo — mantiene paridad con el original)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input[name='modality']").forEach(radio => {
    radio.addEventListener("change", () => {
      const lblV = document.getElementById("lbl-virtual");
      const lblP = document.getElementById("lbl-presencial");
      if (radio.value === "0") {
        lblV.className = lblV.className.replace("border-outline-variant text-on-surface-variant", "border-primary bg-primary-container/20 text-on-surface");
        lblP.className = lblP.className.replace("border-primary bg-primary-container/20 text-on-surface", "border-outline-variant text-on-surface-variant");
      } else {
        lblP.className = lblP.className.replace("border-outline-variant text-on-surface-variant", "border-primary bg-primary-container/20 text-on-surface");
        lblV.className = lblV.className.replace("border-primary bg-primary-container/20 text-on-surface", "border-outline-variant text-on-surface-variant");
      }
    });
  });
});

/* ─────────────────────────────────────────
   Llamada al backend Flask
───────────────────────────────────────── */
async function ejecutarModelo() {
  const demanda    = document.getElementById("sel-demanda").value;
  const costo      = document.getElementById("sel-costo").value;
  const salario    = document.getElementById("sel-salario").value;
  const dificultad = document.getElementById("sel-dificultad").value;
  const modalidad  = document.querySelector("input[name='modality']:checked").value;

  const formError = document.getElementById("form-error");
  if (!demanda || !costo || !salario || !dificultad) {
    formError.classList.remove("hidden");
    return;
  }
  formError.classList.add("hidden");

  const btn = document.getElementById("btn-ejecutar");
  btn.disabled = true;
  mostrarEstado("cargando");

  try {
    const res = await fetch("/api/recomendar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ demanda, costo, salario, dificultad, modalidad })
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const badge      = document.getElementById("badge-modelo");
    const badgeTexto = document.getElementById("badge-texto");
    badge.classList.remove("hidden");
    badge.classList.add("flex");
    badgeTexto.textContent = data.modelo_activo ? "Modelo sklearn activo" : "Modo demostración";

    renderResultados(data.top3);
    mostrarEstado("resultados");

  } catch (err) {
    console.error(err);
    mostrarEstado("api-error");
  } finally {
    btn.disabled = false;
  }
}

/* ─────────────────────────────────────────
   Render de cards (compacto)
───────────────────────────────────────── */
function renderResultados(top3) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  top3.forEach((r, i) => {
    const cfg  = RANK_CONFIGS[i];
    const meta = META[r.nombre] || DEFAULT_META;

    const avatarHTML = meta.img
      ? `<img src="${meta.img}" class="w-full h-full object-cover" alt="${r.nombre}"
           onerror="this.style.display='none';this.parentElement.innerHTML='<span style=font-size:1.6rem;line-height:56px;text-align:center;display:block>${meta.emoji}</span>'">`
      : `<span style="font-size:1.6rem;line-height:56px;text-align:center;display:block">${meta.emoji}</span>`;

    const tagsHTML = (meta.tags || []).map(t =>
      `<span style="background:${t.bg};color:${t.color};font-size:10px;"
         class="px-2 py-0.5 font-bold rounded-full">${t.label}</span>`
    ).join("");

    const razonHTML = `<p style="font-size:11px;" class="text-on-surface-variant mt-1 leading-relaxed">
      → ${r.razones.join(" · ")}</p>`;

    const dims   = ["demanda", "salario", "dificultad"];
    const barras = dims.map(dim => {
      const val = Math.round((r.compat[dim] / 10) * 100);
      return `
        <div class="flex items-center gap-2" style="font-size:10px;">
          <span class="text-on-surface-variant capitalize shrink-0" style="width:52px">${dim}</span>
          <div class="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
            <div class="h-full rounded-full" style="width:${val}%;background:${cfg.barColor}"></div>
          </div>
          <span class="font-bold text-right" style="color:${cfg.barColor};width:26px">${val}%</span>
        </div>`;
    }).join("");

    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <div class="relative flex items-center gap-3 group">
        <div style="background:${cfg.bg};border-bottom:3px solid ${cfg.borderB}"
          class="w-11 h-11 flex items-center justify-center rounded-xl shadow-sm shrink-0 group-hover:scale-110 transition-transform">
          <span style="color:${cfg.numColor};font-family:Quicksand;font-weight:700;font-size:17px">${i + 1}</span>
        </div>
        <div style="border:2px solid ${cfg.cardBorder}"
          class="flex-1 bg-surface-container-lowest p-3.5 rounded-lg shadow-sm relative overflow-hidden">
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div style="background:${meta.avatarBg}" class="w-14 h-14 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                ${avatarHTML}
              </div>
              <div>
                <h4 style="color:${cfg.scoreColor};font-family:Quicksand;font-weight:600;font-size:15px" class="mb-0.5">${r.nombre}</h4>
                <div class="flex flex-wrap gap-1 mb-0.5">${tagsHTML}</div>
                ${razonHTML}
              </div>
            </div>
            <div class="text-right shrink-0">
              <div style="color:${cfg.scoreColor};font-family:Lexend;font-weight:700;font-size:26px;line-height:1">${r.pct}%</div>
              <p class="font-bold mt-0.5" style="font-size:10px;" class="text-on-surface-variant">Match</p>
            </div>
          </div>
          <div class="mt-3 pt-2.5 border-t border-surface-container space-y-1">${barras}</div>
          ${i === 0 ? `<div style="background:${cfg.barColor}" class="absolute bottom-0 left-0 h-1 w-full rounded-b-lg"></div>` : ""}
        </div>
      </div>`;
    container.appendChild(card);
  });

  // Consejo del top 1
  const mejor     = top3[0];
  const mejorMeta = META[mejor.nombre] || DEFAULT_META;
  document.getElementById("consejo-texto").innerHTML =
    `<strong class="text-tertiary">Un consejo:</strong> ${mejorMeta.consejo}`;
}

let pasoActual = 0;

const pasos = document.querySelectorAll(".tutorial-step");
const dots = document.querySelectorAll(".step-dot");

function actualizarTutorial() {

  pasos.forEach((step, index) => {
    step.classList.toggle("hidden", index !== pasoActual);
  });

  dots.forEach((dot, index) => {
    if (index === pasoActual) {
      dot.classList.remove("bg-outline-variant");
      dot.classList.add("bg-primary");
    } else {
      dot.classList.remove("bg-primary");
      dot.classList.add("bg-outline-variant");
    }
  });

  document.getElementById("prev-btn")
    .classList.toggle("hidden", pasoActual === 0);

  const nextBtn = document.getElementById("next-btn");

  if (pasoActual === pasos.length - 1) {
    nextBtn.innerHTML = `
      Comenzar
      <span class="material-symbols-outlined"
        style='font-size:18px;'>
        auto_awesome
      </span>
    `;

    nextBtn.onclick = cerrarModalBienvenida;
  } else {
    nextBtn.innerHTML = `
      Siguiente
      <span class="material-symbols-outlined"
        style='font-size:18px;'>
        arrow_forward
      </span>
    `;

    nextBtn.onclick = () => cambiarPaso(1);
  }
}

function cambiarPaso(dir) {
  pasoActual += dir;

  if (pasoActual < 0) pasoActual = 0;
  if (pasoActual >= pasos.length) pasoActual = pasos.length - 1;

  actualizarTutorial();
}

// Mostrar modal
window.addEventListener("load", () => {
  const modal = document.getElementById("welcome-modal");
  const card = document.getElementById("welcome-card");

  setTimeout(() => {

    modal.classList.remove("opacity-0", "pointer-events-none");

    setTimeout(() => {
      card.classList.remove("scale-95");
      card.classList.add("scale-100");
    }, 50);

  }, 200);

  actualizarTutorial();
});

// Cerrar modal
function cerrarModalBienvenida() {

  const modal = document.getElementById("welcome-modal");
  const card = document.getElementById("welcome-card");

  card.classList.remove("scale-100");
  card.classList.add("scale-95");

  modal.classList.add("opacity-0");

  setTimeout(() => {
    modal.classList.add("pointer-events-none");
  }, 250);
}

function abrirModalBienvenida() {

  pasoActual = 0;
  actualizarTutorial();

  const modal = document.getElementById("welcome-modal");
  const card = document.getElementById("welcome-card");

  modal.classList.remove("opacity-0", "pointer-events-none");

  setTimeout(() => {
    card.classList.remove("scale-95");
    card.classList.add("scale-100");
  }, 50);

}