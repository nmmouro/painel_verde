export function renderList(el, data) {
  el.innerHTML = data.map(item => `
    <div class="row">
      <strong>${Object.values(item)[0]}</strong><br>
      <span>${Object.values(item)[1]}</span>
    </div>
  `).join("");
}
