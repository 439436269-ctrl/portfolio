/* 渲染项目站点 + 滚动路线点亮 */

(function () {
  const route = document.getElementById("route");
  const fill = document.getElementById("routeFill");

  function stationHTML(p) {
    const chips = p.links
      .map(l => `<a class="chip" data-kind="${l.kind}" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
      .join("");
    const note = p.note ? `<span class="chip chip-note">${p.note}</span>` : "";
    const flag = p.featured ? `<span class="flag-tag">旗舰</span>` : "";
    return `
      <article class="station${p.featured ? " featured" : ""} reveal">
        <span class="station-dot" aria-hidden="true"></span>
        <div class="station-body">
          <span class="ghost-idx" aria-hidden="true">${p.idx}</span>
          <span class="kicker mono">${p.kicker}</span>
          <h3>${p.name}${flag}</h3>
          <div class="s-sub">
            ${p.live ? `<span class="badge-live"><i></i>${p.stage}</span>` : `<span>${p.stage}</span>`}
            <span>·</span><span>${p.type}</span>
            <span>·</span><span class="mono">${p.date}</span>
          </div>
          <p class="s-desc">${p.desc}</p>
          <div class="s-tech">${p.tech}</div>
          <div class="chips">${chips}${note}</div>
        </div>
      </article>`;
  }

  route.insertAdjacentHTML("beforeend", PROJECTS.map(stationHTML).join(""));

  document.getElementById("othersGrid").innerHTML = OTHERS.map(o => `
    <a class="other-card" href="${o.url}" target="_blank" rel="noopener">
      <div class="o-top"><span class="o-name">${o.name}</span><span class="o-tag">${o.tag}</span></div>
      <div class="o-desc">${o.desc}</div>
    </a>`).join("");

  document.getElementById("footSrc").textContent =
    `数据来源：${META.source} · 更新于 ${META.updated}`;

  /* 进场动画 */
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* 路线填充：视口中线扫过之处点亮 */
  const routeTop = () => route.getBoundingClientRect().top + window.scrollY;
  function updateFill() {
    const total = route.offsetHeight;
    const passed = window.scrollY + window.innerHeight * 0.55 - routeTop();
    fill.style.height = Math.max(0, Math.min(100, (passed / total) * 100)) + "%";
  }

  /* 站点激活 */
  const stations = [...document.querySelectorAll(".station")];
  const so = new IntersectionObserver(
    entries => entries.forEach(e => e.target.classList.toggle("active", e.isIntersecting)),
    { rootMargin: "-38% 0px -38% 0px" }
  );
  stations.forEach(s => so.observe(s));

  window.addEventListener("scroll", updateFill, { passive: true });
  window.addEventListener("resize", updateFill);
  updateFill();
})();
