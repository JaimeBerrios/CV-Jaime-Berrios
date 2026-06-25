const cvCollection = [
  ["Mark I", "Sistema Compacto", "Diseño AltaCV compacto, directo y orientado a lectura rápida.", "Mark_I_CV_Jaime_Berrios.pdf"],
  ["Mark II", "Sidebar Moderno", "Composición profesional con barra lateral y jerarquía visual clara.", "Mark_II_CV_Jaime_Berrios.pdf"],
  ["Mark III", "Teal Clásico", "Versión AltaCV clásica con acentos teal y distribución equilibrada.", "Mark_III_CV_Jaime_Berrios.pdf"],
  ["Mark IV", "Purple Analytics", "Diseño púrpura con elementos gráficos y presentación técnica.", "Mark_IV_CV_Jaime_Berrios.pdf"],
  ["Mark V", "Infográfico", "Formato visual con iconografía reutilizable y bloques informativos.", "Mark_V_CV_Jaime_Berrios.pdf"],
  ["Mark VI", "ReCeiVe", "Plantilla limpia con fondo personalizado y enfoque corporativo.", "Mark_VI_CV_Jaime_Berrios.pdf"],
  ["Mark VII", "Portada Fotográfica", "Diseño editorial con portada original, barra lateral teal y código QR.", "Mark_VII_CV_Jaime_Berrios.pdf"]
].map(([mark, title, description, file]) => ({ mark, title, description, file }));

const grid = document.querySelector("#cvGrid");
const search = document.querySelector("#cvSearch");
const emptyState = document.querySelector("#emptyState");
const pdfModalElement = document.querySelector("#pdfModal");
const pdfModal = new bootstrap.Modal(pdfModalElement);
const pdfFrame = document.querySelector("#pdfFrame");
const modalTitle = document.querySelector("#pdfModalLabel");
const modalDownload = document.querySelector("#modalDownload");

const pdfPath = (file) => `pdf/${file}`;
const previewPath = (file) => `web/assets/previews/${file.replace(".pdf", ".jpg")}`;

function cardTemplate(cv) {
  const searchable = `${cv.mark} ${cv.title} ${cv.description}`.toLowerCase();
  return `
    <div class="col-md-6 col-xl-4 cv-item" data-search="${searchable}">
      <article class="cv-card">
        <div class="cv-preview">
          <span class="mark-badge">${cv.mark}</span>
          <img src="${previewPath(cv.file)}" alt="Vista previa del currículum ${cv.mark}" loading="lazy">
        </div>
        <div class="cv-card-body">
          <h3 class="mb-2">${cv.title}</h3>
          <p class="cv-description mb-0">${cv.description}</p>
          <div class="cv-actions">
            <button class="btn btn-primary rounded-pill js-view"
                    data-file="${cv.file}" data-title="${cv.mark} — ${cv.title}">
              <i class="bi bi-eye me-1"></i> Ver PDF
            </button>
            <a class="btn btn-ghost rounded-pill" href="${pdfPath(cv.file)}" download>
              <i class="bi bi-download me-1"></i> Descargar
            </a>
          </div>
        </div>
      </article>
    </div>`;
}

grid.innerHTML = cvCollection.map(cardTemplate).join("");

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".js-view");
  if (!button) return;
  const source = pdfPath(button.dataset.file);
  modalTitle.textContent = button.dataset.title;
  modalDownload.href = source;
  modalDownload.setAttribute("download", button.dataset.file);
  pdfFrame.src = `${source}#view=FitH`;
  pdfModal.show();
});

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let visibleItems = 0;
  document.querySelectorAll(".cv-item").forEach((item) => {
    const visible = item.dataset.search.includes(query);
    item.classList.toggle("d-none", !visible);
    if (visible) visibleItems += 1;
  });
  emptyState.classList.toggle("d-none", visibleItems !== 0);
});

pdfModalElement.addEventListener("hidden.bs.modal", () => {
  pdfFrame.src = "";
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();
